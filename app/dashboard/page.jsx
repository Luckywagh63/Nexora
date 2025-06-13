"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs, query, limit } from "firebase/firestore";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser || !currentUser.emailVerified) {
        router.push("/auth");
      } else {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        }
        const startupsQuery = query(collection(db, "startups"), limit(6));
        const startupsSnapshot = await getDocs(startupsQuery);
        const startupsData = startupsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStartups(startupsData);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      try {
        await signOut(auth);
        router.push("/");
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-700 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4 pt-70">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">⚠</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">Please sign in to access your dashboard</p>
          <button
            onClick={() => router.push("/auth")}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-34">
      
      {/* Logout Button Top Right */}
      <div className="flex justify-end max-w-7xl mx-auto px-4 pt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-all"
        >
          Logout
        </button>
      </div>

      {/* User Profile Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 mb-8 hover:bg-white/90 transition-all">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">
                  {userProfile?.name?.[0] || user?.displayName?.[0] || user?.email?.[0]?.toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {userProfile?.name || user?.displayName || 'User'}
                </h2>
                <p className="text-gray-600 mb-1">{user?.email}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user?.emailVerified 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {user?.emailVerified ? '✓ Verified' : '⚠ Unverified'}
                  </span>
                  {userProfile?.userType && (
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium capitalize">
                      {userProfile.userType}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-semibold text-gray-800">
                  {user?.metadata?.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleDateString() : 
                    'Recently'
                  }
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">Last Sign In</p>
                <p className="font-semibold text-gray-800">
                  {user?.metadata?.lastSignInTime ? 
                    new Date(user.metadata.lastSignInTime).toLocaleDateString() : 
                    'Today'
                  }
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">Profile Status</p>
                <p className="font-semibold text-gray-800">
                  {userProfile ? 'Complete' : 'Incomplete'}
                </p>
              </div>
            </div>
          </div>
          
          {userProfile?.bio && (
            <div className="mt-4 pt-4 border-t border-amber-200/30">
              <p className="text-sm text-gray-600 mb-1">Bio</p>
              <p className="text-gray-800">{userProfile.bio}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover. <span className="text-amber-600">Invest.</span> <span className="text-orange-600">Grow.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Connect with revolutionary startups and transform your investment portfolio with next-generation companies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Active Startups */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 hover:bg-white/70 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Active Startups</h3>
            </div>
            <p className="text-3xl font-bold text-gray-800">{startups.length}</p>
          </div>

          {/* Total Funding */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 hover:bg-white/70 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Total Funding</h3>
            </div>
            <p className="text-3xl font-bold text-gray-800">
              ${startups.reduce((total, s) => total + (s.fundingRaised || 0), 0).toLocaleString()}
            </p>
          </div>

          {/* Connections */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 hover:bg-white/70 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Connections</h3>
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {startups.reduce((total, s) => total + (s.connections || 0), 0)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            🚀 Register Your Startup
          </button>
          <button className="bg-white/80 border-2 border-amber-300 text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-400 transition-all">
            👥 Browse Investors
          </button>
          <button className="bg-white/80 border-2 border-amber-300 text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-400 transition-all">
            📊 View Analytics
          </button>
        </div>

        {/* Featured Startups */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Featured Startups</h3>
            <button className="text-amber-600 hover:text-amber-700 font-medium hover:underline transition-all">View All →</button>
          </div>

          {startups.length === 0 ? (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-amber-200/30 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏢</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">No Startups Yet</h4>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Be the first to showcase your startup on Nexora. Connect with investors and grow your business.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-md">
                Add Your Startup
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startups.map(startup => (
                <div key={startup.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 hover:shadow-xl transition-all hover:scale-105 hover:bg-white/90">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{startup.name?.[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{startup.name}</h4>
                      <p className="text-sm text-gray-600">{startup.industry}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {startup.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-amber-600">
                      ${startup.fundingGoal?.toLocaleString()} goal
                    </span>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-md">
                      Connect
                    </button>
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
