"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError("");
    router.push("/auth/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gradient-to-br from-[#0b1220] to-[#111827] rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create Account
        </h1>

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-md bg-[#1f2937] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-2 px-4 py-3 rounded-md bg-[#1f2937] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Error */}
        {error && (
          <p className="text-sm text-red-400 mb-4">{error}</p>
        )}

        {/* Button */}
        <button
          onClick={handleCreateAccount}
          className="w-full mt-2 bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="mt-5 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="font-semibold text-white cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </div>
    </main>
  );
}
