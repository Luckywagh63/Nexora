"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  TrendingUp,
  Users,
  Briefcase,
  LogOut,
  ArrowRight,
  Building2,
  DollarSign,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading for smoother UI
  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      await signOut({ callbackUrl: "/" });
    }
  };

  // While NextAuth is checking session
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 font-light tracking-wide">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  // If not logged in
  if (!session?.user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="border border-gray-900 p-12 text-center max-w-md">
          <div className="w-16 h-16 border border-red-900/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-red-500 text-2xl">⚠</span>
          </div>
          <h2 className="text-2xl font-light text-white mb-4 tracking-tight">
            Authentication Required
          </h2>
          <p className="text-gray-600 mb-8 font-light">
            Please sign in to access your dashboard
          </p>
          <a href="/auth">
            <button className="bg-amber-500 text-black px-8 py-3 font-light tracking-wide hover:bg-amber-400 transition-all w-full">
              Go to Sign In
            </button>
          </a>
        </div>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Logout Button */}
      <div className="relative z-10 flex justify-end max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-gray-800 text-gray-500 hover:text-red-400 hover:border-red-900/30 px-6 py-2 font-light text-sm tracking-wide transition-all"
        >
          <LogOut className="w-4 h-4 stroke-[1.5]" />
          Logout
        </button>
      </div>

      {/* User Profile Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="border border-gray-900 p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex items-center gap-6">
              {user.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border border-gray-800 object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-white font-light text-2xl">
                    {user.name?.[0]?.toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <h2 className="text-3xl font-light text-white tracking-tight mb-2">
                  {user.name}
                </h2>
                <p className="text-gray-600 font-light text-sm mb-3">
                  {user.email}
                </p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 border border-green-900/30 text-green-500 text-xs font-light tracking-wide">
                    Verified via Google
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:pl-8 md:border-l md:border-gray-900">
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">
                  Member Since
                </p>
                <p className="font-light text-white text-sm">Recently</p>
              </div>
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">
                  Last Sign In
                </p>
                <p className="font-light text-white text-sm">Today</p>
              </div>
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">
                  Profile Status
                </p>
                <p className="font-light text-white text-sm">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard content (rest of your UI) */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">
              Dashboard
            </span>
          </div>
          <h2 className="text-6xl font-light text-white mb-6 tracking-tight leading-tight">
            Investment <span className="text-amber-500/90">Overview</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            Track your portfolio, discover opportunities, and connect with
            revolutionary startups.
          </p>
        </div>
      </main>
    </div>
  );
}
