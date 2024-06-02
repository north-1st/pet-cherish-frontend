/* eslint-disable no-unused-vars */
import { create } from 'zustand';

import { User } from '@/types/types';

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));

export default useUserStore;
