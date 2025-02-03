import { create } from "zustand";

type RegisterFormStore = {
    isPending: boolean;
    setPending: (value: boolean) => void;
}

export const useRegisterFormStore = create<RegisterFormStore>((set) => ({
    isPending: false,
    setPending: (value) => set(() => ({ isPending: value }))
}))