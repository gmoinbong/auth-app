import { create } from "zustand";

type LoginFormStore = {
    isPending: boolean;
    setPending: (value: boolean) => void;
    error?: string;
    setError: (error?: string) => void;
}

export const useLoginFormStore = create<LoginFormStore>((set) => ({
    isPending: false,
    setPending: (value) => set(() => ({ isPending: value })),
    setError: (error) => set({ error })
}))