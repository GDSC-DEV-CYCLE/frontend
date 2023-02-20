import axios from 'axios';

import { useAuthStore } from '../store/AuthStore';
import fetchWithCredentials from './fetchWithCredentials';
import postWithCredentials from './postWithCredentials';
const { VITE_APP_API_URL } = import.meta.env;

class Authentication {
  static async signUp(signUpDTO: SignUpDTO) {
    const response = await axios.post<SignUpResponse>(
      `${VITE_APP_API_URL}/auth/signup`,
      signUpDTO,
    );
    return response.data;
  }

  static async getUser() {
    const response = await fetchWithCredentials<UserSchema>('/auth/profile');

    return response.data;
  }

  static async signIn(signInDTO: SignInDTO) {
    const {
      setAccessToken,
      setRefreshToken,
      setAccessTokenExpiration,
      setRefreshTokenExpiration,
      setUserInfo,
      setIsSignedIn,
    } = useAuthStore.getState();

    const response = await axios.post<SignInDTO, SignInResponse>(
      `${VITE_APP_API_URL}/auth/login`,
      signInDTO,
    );

    const { accessToken, refreshToken, accessTokenExpiration, refreshTokenExpiration } =
      response.data;

    console.log('login response: ', response);

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAccessTokenExpiration(new Date().getTime() + accessTokenExpiration);
    console.log(new Date().getTime() + accessTokenExpiration);
    setRefreshTokenExpiration(new Date().getTime() + refreshTokenExpiration);
    setIsSignedIn(true);

    const userInfo = await Authentication.getUser();
    setUserInfo(userInfo);
  }

  static async signOut() {
    const { clear } = useAuthStore.getState();

    // post request to logout
    await postWithCredentials<null, SignOutResponse>('/auth/logout', null);

    clear();
  }

  static async ReissueTokens() {
    const {
      accessToken,
      refreshToken,
      accessTokenExpiration,
      refreshTokenExpiration,
      setAccessToken,
      setRefreshToken,
      setAccessTokenExpiration,
      setRefreshTokenExpiration,
    } = useAuthStore.getState();

    console.log(refreshToken);

    if (
      accessTokenExpiration > new Date().getTime() + 60000 &&
      refreshTokenExpiration > new Date().getTime() + 60000
    ) {
      console.error('Tokens are not expired');
      return;
    }

    if (!accessToken || !refreshToken) {
      console.error('Tokens are not set');
      return;
    }

    const request: ReissueDTO = {
      accessToken,
      refreshToken,
    };

    console.log('request', request);

    const response = await axios.post<ReissueDTO, ReissueResponse>(
      `${VITE_APP_API_URL}/auth/reissue`,
      request,
    );

    console.log('response', response);

    const {
      accessToken: accessToken2,
      refreshToken: refreshToken2,
      accessTokenExpiration: accessTokenExpiration2,
      refreshTokenExpiration: refreshTokenExpiration2,
    } = response.data;

    setAccessToken(accessToken2);
    setRefreshToken(refreshToken2);
    setAccessTokenExpiration(accessTokenExpiration2);
    setRefreshTokenExpiration(refreshTokenExpiration2);
  }
}

export default Authentication;
