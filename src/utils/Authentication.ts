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
    } = useAuthStore.getState();

    const response = await axios.post<SignInDTO, SignInResponse>(
      `${VITE_APP_API_URL}/auth/login`,
      signInDTO,
    );

    const { accessToken, refreshToken, accessTokenExpiration, refreshTokenExpiration } =
      response.data;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAccessTokenExpiration(accessTokenExpiration);
    setRefreshTokenExpiration(refreshTokenExpiration);

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
      setAccessToken,
      setRefreshToken,
      setAccessTokenExpiration,
      setRefreshTokenExpiration,
      isAccessTokenExpired,
      isRefreshTokenExpired,
    } = useAuthStore.getState();

    if (!isAccessTokenExpired() || isRefreshTokenExpired()) {
      return;
    }

    if (!accessToken || !refreshToken) {
      return;
    }

    const response = await postWithCredentials<ReissueDTO, ReissueResponse>(
      '/auth/reissue-tokens',
      {
        accessToken,
        refreshToken,
      },
    );

    const {
      accessToken: accessToken2,
      refreshToken: refreshToken2,
      accessTokenExpiration: accessTokenExpiration2,
      refreshTokenExpiration: refreshTokenExpiration2,
    } = response.data.data;

    setAccessToken(accessToken2);
    setRefreshToken(refreshToken2);
    setAccessTokenExpiration(accessTokenExpiration2);
    setRefreshTokenExpiration(refreshTokenExpiration2);
  }
}

export default Authentication;
