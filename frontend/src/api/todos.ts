import api from "./client";

export type Todo = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
};

export const getTodos = () => api.get<Todo[]>("/todos").then(r => r.data);
export const createTodo = (data: Partial<Omit<Todo, "_id" | "createdAt" | "updatedAt">>) => api.post<Todo>("/todos", data).then(r => r.data);
export const updateTodo = (id: string, data: Partial<Omit<Todo, "_id" | "createdAt" | "updatedAt">>) => api.put<Todo>(`todos/${id}`, data).then(r => r.data);
export const deleteTodo = (id: string) => api.delete<{ success: boolean }>(`/todos/${id}`).then(r => r.data);
