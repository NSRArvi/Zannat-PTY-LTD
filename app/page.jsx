"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import logo from "@/public/logo.png";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const trimmedEmail = email.trim().toLowerCase();

    // Static login checks
    if (trimmedEmail === "admin@zannatptyltd.com" && password === "password") {
      try {
        localStorage.setItem("user_role", "admin");
        localStorage.setItem("user_email", trimmedEmail);
      } catch {
        // ignore
      }
      router.push("/dashboard");
    } else if (
      trimmedEmail === "user@zannatptyltd.com" &&
      password === "password"
    ) {
      try {
        localStorage.setItem("user_role", "customer");
        localStorage.setItem("user_email", trimmedEmail);
      } catch {
        // ignore
      }
      router.push("/dashboard?role=customer");
    } else {
      setIsLoading(false);
      setError("Invalid email or password. Please check your credentials.");
    }
  };

  const handleQuickFill = (type) => {
    if (type === "admin") {
      setEmail("admin@zannatptyltd.com");
      setPassword("password");
    } else {
      setEmail("user@zannatptyltd.com");
      setPassword("password");
    }
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Zannat Logo"
            width={180}
            height={60}
            priority
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-text-primary">
          Log in to your account to manage your loan scenarios and applications.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-sm border border-gray-200/80 rounded-2xl">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-text-dark mb-1.5"
              >
                Email address
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@zannatptyltd.com"
                  className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-text-dark mb-1.5"
              >
                Password
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-primary">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm text-text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-text-primary hover:text-text-dark cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
                />
                <span className="text-text-primary">Remember me</span>
              </label>

              <a
                href="#"
                className="font-semibold text-primary hover:text-blue-600 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#4f6bf5] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 cursor-pointer"
              >
                <span>{isLoading ? "Signing in..." : "Sign in to Dashboard"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Demo Sign-in Helpers */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Quick Demo Access
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleQuickFill("admin")}
                className="p-2.5 text-xs text-left bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-xl transition-colors cursor-pointer"
              >
                <span className="font-bold text-text-dark block">Admin / Broker</span>
                <span className="text-[11px] text-text-primary block truncate">
                  admin@zannatptyltd.com
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill("user")}
                className="p-2.5 text-xs text-left bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-xl transition-colors cursor-pointer"
              >
                <span className="font-bold text-text-dark block">Customer</span>
                <span className="text-[11px] text-text-primary block truncate">
                  user@zannatptyltd.com
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
