import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../../utils/auth";
import { useToast } from "../../contexts/ToastContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const ok = login({ email, password });
    if (!ok) {
      toast?.show({ type: "error", message: "Invalid credentials" });
      return;
    }

    toast?.show({ type: "success", message: "Welcome back!" });
    const from = location.state?.from?.pathname || "/dashboard";
    navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border"
          />
          {errors.email && (
            <div className="text-xs text-red-600 mt-1">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border"
          />
          {errors.password && (
            <div className="text-xs text-red-600 mt-1">{errors.password}</div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Login
          </button>
          <Link to="/auth/signup" className="text-sm text-indigo-600">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
