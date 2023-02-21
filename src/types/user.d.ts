interface UserSchema {
  name: string;
  email: string;
  birth: string;
  job: string;
}

interface SignUpDTO {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  birth: string;
  job: string;
}

interface SignUpResponse {
  status: number;
  message: string;
}

interface SignInDTO {
  email: string;
  password: string;
}

interface SignInResponse {
  status: number;
  message: string;
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiration: number;
    refreshTokenExpiration: number;
  };
}

interface SignOutResponse {
  status: number;
  message: string;
}

interface ReissueDTO {
  accessToken: string;
  refreshToken: string;
}

interface ReissueResponse {
  status: number;
  message: string;
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiration: number;
    refreshTokenExpiration: number;
  };
}

interface FindEmailDTO {
  name: string;
  birth: string;
}

interface FindEmailResponse {
  status: number;
  message: string;
  data: string[];
}

interface FindPasswordDTO {
  name: string;
  email: string;
}

interface FindPasswordResponse {
  status: number;
  message: string;
}

interface ChangePasswordDTO {
  password: string;
  checkPassword: string;
}

interface ChangePasswordResponse {
  status: number;
  message: string;
}
export interface UseLoginTypes {
  isLogin: boolean;
  changeLoginState: () => void;
}
