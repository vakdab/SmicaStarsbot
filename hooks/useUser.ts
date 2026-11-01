"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Subscription, UserDetails } from "@/types";

interface UserStore {
  user: UserDetails | null;
  subscription: Subscription | null;
  isLoading: boolean;
  signIn: (email: string, fullName?: string) => void;
  signOut: () => void;
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      subscription: null,
      isLoading: false,
      signIn: (email, fullName) =>
        set({
          user: {
            id: "demo-user",
            email,
            full_name: fullName || email.split("@")[0]
          }
        }),
      signOut: () => set({ user: null, subscription: null })
    }),
    {
      name: "smicastars-user",
      partialize: (state) => ({
        user: state.user,
        subscription: state.subscription
      })
    }
  )
);
