import { create } from 'zustand';

interface UseTopNavigationTypes {
  navigation: string;
}

export const useTopNavigation = create<UseTopNavigationTypes>((set) => ({
  navigation: '칼럼',
  moveToQAndA: () => set({ navigation: 'Q&A' }),
  moveToColumn: () => set({ navigation: '칼럼' }),
  moveToReview: () => set({ navigation: '후기' }),
}));
