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

    try {
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

      console.log(response);
    } catch (error) {
      throw new Error('Error in Authentication.signIn');
    }
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

  static async changePassword(changePasswordDTO: ChangePasswordDTO) {
    const response = await postWithCredentials<ChangePasswordDTO, ChangePasswordResponse>(
      '/auth/change/pw',
      changePasswordDTO,
    );

    if (response.status !== 200) {
      throw new Error('Error');
    }
  }

  static async findEmail(findEmailDTO: FindEmailDTO) {
    const response = await axios.post<FindEmailDTO, FindEmailResponse>(
      `${VITE_APP_API_URL}/auth/find/id`,
      findEmailDTO,
    );

    return response.data;
  }

  static async findPassword(findPasswordDTO: FindPasswordDTO) {
    const response = await axios.post<FindPasswordDTO, FindPasswordResponse>(
      `${VITE_APP_API_URL}/auth/find/pw`,
      findPasswordDTO,
    );

    if (response.status !== 200) {
      throw new Error('Error');
    }
  }
}

export default Authentication;
