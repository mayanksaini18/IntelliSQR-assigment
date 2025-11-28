import api from "./client";
import type { User } from "../hooks/useAuth";

type AuthPayload = {
  name?: string;
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
  user: User;
};

export const signup = (payload: AuthPayload) =>
  api.post<AuthResponse>("/auth/signup", payload).then(r => r.data);

export const login = (payload: Omit<AuthPayload, "name">) =>
  api.post<AuthResponse>("/auth/login", payload).then(r => r.data);
