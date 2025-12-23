"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // 👉 SIMPLE ADMIN CHECK (replace later if needed)
    if (email === "admin@example.com" && password === "admin123") {
      // ✅ SET AUTH COOKIE
      document.cookie = "admin-auth=true; path=/";

      // ✅ REDIRECT TO DASHBOARD
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid admin credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="border p-6 rounded space-y-4 w-80"
      >
        <h1 className="text-xl font-bold">Admin Login</h1>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <button className="bg-black text-white w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
}

