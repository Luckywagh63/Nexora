"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      alert("Google sign-in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        console.log("Login:", formData);
      } else {
        if (!formData.acceptTerms) {
          alert("You must accept the terms to sign up.");
          return;
        }
        console.log("Signup:", formData);
      }
    } catch (error) {
      alert((isLogin ? "Login" : "Signup") + " failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black relative">
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      <div className="w-full max-w-md relative z-10">
        <div className="border border-gray-900 p-12">
          <div className="text-center mb-12">
            <div className="mb-8">
              <span className="text-3xl font-light text-white tracking-tight">NEXORA</span>
            </div>
            <h1 className="text-4xl font-light text-white mb-3 tracking-tight">
              {isLogin ? "Welcome Back" : "Join Nexora"}
            </h1>
            <p className="text-gray-600 font-light text-sm tracking-wide">
              {isLogin ? "Sign in to continue" : "Create your account"}
            </p>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full mb-8 border border-gray-800 text-white py-3 px-4 font-light text-sm tracking-wide hover:border-gray-700 focus:outline-none focus:border-amber-500/50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-900"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-black text-gray-600 font-light tracking-wider uppercase">or</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-700 mb-2 font-light tracking-wider uppercase">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-800 bg-gray-900/50 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 font-light text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-2 font-light tracking-wider uppercase">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-800 bg-gray-900/50 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 font-light text-sm transition-all"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs text-gray-700 mb-2 font-light tracking-wider uppercase">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-800 bg-gray-900/50 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 font-light text-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-2 font-light tracking-wider uppercase">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-800 bg-gray-900/50 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 font-light text-sm transition-all"
                required
              />
            </div>

            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 bg-gray-900/50 border-gray-800 focus:ring-amber-500 text-amber-500"
                />
                <span className="text-xs text-gray-600 font-light leading-5">
                  I agree to the{" "}
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">terms</a>
                  {" and "}
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">privacy policy</a>
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group w-full bg-amber-500 text-black py-3 px-4 font-light text-sm tracking-wide hover:bg-amber-400 focus:outline-none transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? "Loading..." : isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-600 hover:text-white transition-colors font-light"
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="text-gray-400 hover:text-white">
                {isLogin ? "Sign up" : "Sign in"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
