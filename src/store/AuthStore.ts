import { createJSONStorage, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiration: number;
  refreshTokenExpiration: number;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setAccessTokenExpiration: (accessTokenExpiration: number) => void;
  setRefreshTokenExpiration: (refreshTokenExpiration: number) => void;

  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;

  user: UserSchema | null;
  setUserInfo: (user: UserSchema) => void;

  clear: () => void;

  isAccessTokenExpired: () => boolean;
  isRefreshTokenExpired: () => boolean;
}

export const useAuthStore = createStore<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      accessTokenExpiration: 0,
      refreshTokenExpiration: 0,
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setAccessTokenExpiration: (accessTokenExpiration) => set({ accessTokenExpiration }),
      setRefreshTokenExpiration: (refreshTokenExpiration) =>
        set({ refreshTokenExpiration }),

      isSignedIn: false,
      setIsSignedIn: (isSignedIn) => set({ isSignedIn }),

      user: null,
      setUserInfo: (user) => set({ user }),

      clear: () =>
        set({
          accessToken: null,
          refreshToken: null,
          accessTokenExpiration: 0,
          refreshTokenExpiration: 0,
          isSignedIn: false,
          user: null,
        }),

      isAccessTokenExpired: () => {
        const now = new Date().getTime();
        return now > get().accessTokenExpiration;
      },

      isRefreshTokenExpired: () => {
        const now = new Date().getTime();
        return now > get().accessTokenExpiration;
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
