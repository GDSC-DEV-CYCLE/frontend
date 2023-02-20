import { create } from 'zustand';

import { PostKindTypes, UseTopNavigationTypes } from '../types/navigation';
import { UseLoginTypes } from '../types/user';

export const useTopNavigation = create<UseTopNavigationTypes>((set) => ({
  postKind: '',
  changePostKind: (navigation: PostKindTypes) => set({ postKind: navigation }),
}));

export const useLogin = create<UseLoginTypes>((set) => ({
  isLogin: false,
  changeLoginState: () => set((state) => ({ isLogin: !state.isLogin })),
}));
