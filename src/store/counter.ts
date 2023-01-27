import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterStore {
  count: number;
  increment: () => void;
}

const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state: CounterStore) => ({ count: state.count + 1 })),
    }),
    {
      anonymousActionType: 'counter',
    },
  ),
);

export default useCounterStore;
