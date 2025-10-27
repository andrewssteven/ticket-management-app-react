import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../utils/auth";
import { useToast } from "../../contexts/ToastContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    if (!password) e.password = "Password is required";
    if (password !== confirm) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const ok = register({ email, password });
    if (!ok) {
      toast?.show({ type: "error", message: "Failed to create account" });
      return;
    }

    toast?.show({ type: "success", message: "Account created. Welcome!" });
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
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
        <div>
          <label className="block text-sm">Confirm password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border"
          />
          {errors.confirm && (
            <div className="text-xs text-red-600 mt-1">{errors.confirm}</div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Sign up
          </button>
          <Link to="/auth/login" className="text-sm text-indigo-600">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
