import { create } from 'zustand';

interface UseTopNavigationTypes {
  postKind: string;
  changePostKind: (navigtion: string) => void;
}

export const useTopNavigation = create<UseTopNavigationTypes>((set) => ({
  postKind: '칼럼',
  changePostKind: (navigation: string) => set({ postKind: navigation }),
}));

interface UseLoginTypes {
  isLogin: boolean;
  changeLoginState: () => void;
}

export const useLogin = create<UseLoginTypes>((set) => ({
  isLogin: false,
  changeLoginState: () => set((state) => ({ isLogin: !state.isLogin })),
}));
