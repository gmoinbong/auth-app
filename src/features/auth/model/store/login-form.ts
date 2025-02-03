import { create } from "zustand";

type LoginFormStore = {
    isPending: boolean;
    setPending: (value: boolean) => void;
}

export const useLoginFormStore = create<LoginFormStore>((set) => ({
    isPending: false,
    setPending: (value) => set(() => ({ isPending: value }))
}))