import { Ghost } from "@prisma/client";
import { create } from "zustand";

interface AuthStoreProp {
  ghost: Ghost | null;
  setGhost: (value: Ghost) => void;
  removeGhost: () => void;
}

export const useAuthStore = create<AuthStoreProp>((set) => ({
  ghost: null,
  setGhost: (value: Ghost) => set({ ghost: value }),
  removeGhost: () => set({ ghost: null }),
}));
