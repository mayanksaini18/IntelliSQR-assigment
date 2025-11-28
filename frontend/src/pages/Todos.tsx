import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";
import { useAuth } from "../hooks/useAuth";

export default function Todos() {
  const logout = useAuth(s => s.logout);
  const user = useAuth(s => s.user);
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  async function load() {
    const data = await getTodos();
    setTodos(data);
  }
  useEffect(() => { load(); }, []);

  async function add() {
    if (!title) return;
    const t = await createTodo({ title });
    setTodos(prev => [t, ...prev]);
    setTitle("");
  }

  async function toggle(todo: any) {
    const updated = await updateTodo(todo._id, { completed: !todo.completed });
    setTodos(prev => prev.map(t => t._id === updated._id ? updated : t));
  }

  async function remove(id: string) {
    await deleteTodo(id);
    setTodos(prev => prev.filter(t => t._id !== id));
  }

  return (
   <div
  style={{
    maxWidth: 700,
    margin: "60px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fafafa",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  {/* Header */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px",
    }}
  >
    <h2 style={{ margin: 0 }}>Todos – {user?.email}</h2>

    <button
      onClick={() => {
        logout();
        window.location.href = "/login";
      }}
      style={{
        padding: "8px 16px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  </div>

  {/* Add Todo */}
  <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="New todo"
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
    <button
      onClick={add}
      style={{
        padding: "12px 18px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "500",
      }}
    >
      Add
    </button>
  </div>

  {/* Todo List */}
  <ul style={{ listStyle: "none", padding: 0 }}>
    {todos.map((t) => (
      <li
        key={t._id}
        style={{
          padding: "12px 15px",
          background: "white",
          borderRadius: "8px",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #eee",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggle(t)}
            style={{ transform: "scale(1.3)", cursor: "pointer" }}
          />

          <span
            style={{
              marginLeft: "12px",
              textDecoration: t.completed ? "line-through" : "none",
              fontSize: "16px",
            }}
          >
            {t.title}
          </span>
        </div>

        <button
          onClick={() => remove(t._id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}
