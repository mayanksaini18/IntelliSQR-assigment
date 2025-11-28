
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todos from "./pages/Todos";
import { useAuth } from "./hooks/useAuth";

function Protected({ children }: { children: JSX.Element }) {
  const token = useAuth(state => state.token);
  if (!token) return <Navigate to="/login" />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Protected><Todos /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}
