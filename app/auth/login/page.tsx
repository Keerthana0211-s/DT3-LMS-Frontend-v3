"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Role-based routing (mock)
    if (email === "admin@test.com") router.push("/dashboard/admin");
    else if (email === "instructor@test.com") router.push("/dashboard/instructor");
    else if (email === "manager@test.com") router.push("/dashboard/manager");
    else router.push("/dashboard/learner");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        
        <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-slate-600 text-center mb-6">
          Login to continue learning
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </div>

        <p className="text-slate-600 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/auth/signup")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
