import React, { useState } from "react";
import { signup } from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const setAuth = useAuth(state => state.setAuth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await signup({ name, email, password });
      console.log(res);
      setAuth(res.token, res.user);
      console.log("Signup successful");
      nav("/");
    } catch (e: any) {
      setErr(e.response?.data?.error || "Signup failed");
      console.log("Signup failed");
      console.log(e);
    }
  }

  return (
    <div
  style={{
    maxWidth: 400,
    margin: "60px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Signup</h2>

  {err && (
    <div
      style={{
        color: "red",
        marginBottom: "15px",
        textAlign: "center",
      }}
    >
      {err}
    </div>
  )}

  <form onSubmit={submit}>
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>

    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>

    <button
      type="submit"
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Signup
    </button>
  </form>

  <p style={{ textAlign: "center", marginTop: "15px" }}>
    Have an account? <Link to="/login">Login</Link>
  </p>
</div>

  );
}
