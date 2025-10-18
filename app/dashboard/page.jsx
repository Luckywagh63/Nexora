"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Briefcase, LogOut, ArrowRight, Building2, DollarSign, Activity } from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add your Firebase authentication logic here
    // This is just the UI shell
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      console.log("Logout");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 font-light tracking-wide">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="border border-gray-900 p-12 text-center max-w-md">
          <div className="w-16 h-16 border border-red-900/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-red-500 text-2xl">⚠</span>
          </div>
          <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Authentication Required</h2>
          <p className="text-gray-600 mb-8 font-light">Please sign in to access your dashboard</p>
          <button className="bg-amber-500 text-black px-8 py-3 font-light tracking-wide hover:bg-amber-400 transition-all w-full">
            Go to Sign In
          </button>
        </div>
      </div>
    );
  }

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
              <div className="w-20 h-20 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <span className="text-white font-light text-2xl">
                  {userProfile?.name?.[0] || user?.displayName?.[0] || user?.email?.[0]?.toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-light text-white tracking-tight mb-2">
                  {userProfile?.name || user?.displayName || 'User'}
                </h2>
                <p className="text-gray-600 font-light text-sm mb-3">{user?.email}</p>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs font-light tracking-wide ${
                    user?.emailVerified 
                      ? 'border border-green-900/30 text-green-500' 
                      : 'border border-yellow-900/30 text-yellow-500'
                  }`}>
                    {user?.emailVerified ? 'Verified' : 'Unverified'}
                  </span>
                  {userProfile?.userType && (
                    <span className="px-3 py-1 border border-amber-500/30 text-amber-500 text-xs font-light tracking-wide capitalize">
                      {userProfile.userType}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:pl-8 md:border-l md:border-gray-900">
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">Member Since</p>
                <p className="font-light text-white text-sm">
                  {user?.metadata?.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleDateString() : 
                    'Recently'
                  }
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">Last Sign In</p>
                <p className="font-light text-white text-sm">
                  {user?.metadata?.lastSignInTime ? 
                    new Date(user.metadata.lastSignInTime).toLocaleDateString() : 
                    'Today'
                  }
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-700 font-light mb-2 tracking-wider uppercase">Profile Status</p>
                <p className="font-light text-white text-sm">
                  {userProfile ? 'Complete' : 'Incomplete'}
                </p>
              </div>
            </div>
          </div>
          
          {userProfile?.bio && (
            <div className="mt-8 pt-8 border-t border-gray-900">
              <p className="text-xs text-gray-700 font-light mb-3 tracking-wider uppercase">Bio</p>
              <p className="text-gray-600 font-light leading-relaxed">{userProfile.bio}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Dashboard</span>
          </div>
          <h2 className="text-6xl font-light text-white mb-6 tracking-tight leading-tight">
            Investment <span className="text-amber-500/90">Overview</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            Track your portfolio, discover opportunities, and connect with revolutionary startups.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-gray-900 p-8 hover:border-gray-800 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center group-hover:border-amber-500/30 transition-all">
                <TrendingUp className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-light text-gray-600 tracking-wide uppercase">Active Startups</h3>
            </div>
            <p className="text-5xl font-light text-white tracking-tight">{startups.length}</p>
          </div>

          <div className="border border-gray-900 p-8 hover:border-gray-800 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center group-hover:border-amber-500/30 transition-all">
                <DollarSign className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-light text-gray-600 tracking-wide uppercase">Total Funding</h3>
            </div>
            <p className="text-5xl font-light text-white tracking-tight">
              ${(startups.reduce((total, s) => total + (s.fundingRaised || 0), 0) / 1000000).toFixed(1)}M
            </p>
          </div>

          <div className="border border-gray-900 p-8 hover:border-gray-800 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center group-hover:border-amber-500/30 transition-all">
                <Users className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-light text-gray-600 tracking-wide uppercase">Connections</h3>
            </div>
            <p className="text-5xl font-light text-white tracking-tight">
              {startups.reduce((total, s) => total + (s.connections || 0), 0)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="group bg-amber-500 text-black px-8 py-4 font-light tracking-wide hover:bg-amber-400 transition-all flex items-center gap-3">
            Register Your Startup
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
          </button>
          <button className="border border-gray-800 text-gray-500 hover:text-white hover:border-gray-700 px-8 py-4 font-light tracking-wide transition-all">
            Browse Investors
          </button>
          <button className="border border-gray-800 text-gray-500 hover:text-white hover:border-gray-700 px-8 py-4 font-light tracking-wide transition-all">
            View Analytics
          </button>
        </div>

        {/* Featured Startups */}
        <div>
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Portfolio</span>
              </div>
              <h3 className="text-3xl font-light text-white tracking-tight">Featured Startups</h3>
            </div>
            <button className="text-amber-500/70 hover:text-amber-500 font-light text-sm tracking-wide transition-all flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          {startups.length === 0 ? (
            <div className="border border-gray-900 p-16 text-center">
              <div className="w-16 h-16 border border-gray-800 flex items-center justify-center mx-auto mb-8">
                <Building2 className="w-8 h-8 text-gray-700 stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-light text-white mb-4 tracking-tight">No Startups Yet</h4>
              <p className="text-gray-600 mb-8 max-w-md mx-auto font-light">
                Be the first to showcase your startup on Nexora. Connect with investors and grow your business.
              </p>
              <button className="bg-amber-500 text-black px-8 py-3 font-light tracking-wide hover:bg-amber-400 transition-all">
                Add Your Startup
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startups.map(startup => (
                <div key={startup.id} className="border border-gray-900 hover:border-gray-800 transition-all group">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                        <span className="text-white font-light">{startup.name?.[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-light text-white tracking-tight">{startup.name}</h4>
                        <p className="text-xs text-gray-600 font-light">{startup.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm font-light leading-relaxed line-clamp-3">
                      {startup.description}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-gray-900">
                      <span className="text-sm font-light text-amber-500">
                        ${startup.fundingGoal?.toLocaleString()}
                      </span>
                      <button className="text-gray-500 hover:text-white font-light text-sm tracking-wide transition-all flex items-center gap-2">
                        Connect
                        <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
