import { Ghost } from "@prisma/client";
import { create } from "zustand";

interface AuthStoreProp {
  ghost: Ghost | null;
  setGhost: (value: Ghost | null) => void;
  removeGhost: () => void;
}

export const useAuthStore = create<AuthStoreProp>((set) => ({
  ghost: null,
  setGhost: (value: Ghost | null) => set({ ghost: value }),
  removeGhost: () => set({ ghost: null }),
}));
