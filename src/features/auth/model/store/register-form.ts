import { create } from "zustand";

type RegisterFormStore = {
    isPending: boolean;
    setPending: (value: boolean) => void;
    error?: string;
    setError: (error?: string) => void;
    data?: string;
    setData: (data?: string) => void;
}

export const useRegisterFormStore = create<RegisterFormStore>((set) => ({
    isPending: false,
    setPending: (value) => set(() => ({ isPending: value })),
    setError: (error) => set({ error }),
    setData: (data) => set({ data })
}))