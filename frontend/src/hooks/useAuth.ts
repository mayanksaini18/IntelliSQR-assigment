import { create } from "zustand";

export interface User {
  _id: string;
  name: string;
  email: string;
}

type AuthState = {
  token: string | null;
  user: User | null;
  setAuth: (token: string | null, user?: User) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
  setAuth: (token, user) => {
    if (token) {
      localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    set({ token, user: user || null });
  },
  logout: () => {
    get().setAuth(null);
  },
}));
