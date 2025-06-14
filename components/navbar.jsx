"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search, User, LogOut, Home, Compass, Info, Mail } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}

export default function NexoraNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/business", label: "Explore", icon: Compass },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <ClientOnly>
      <nav className={`backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5 fixed top-0 w-full z-50 transition-all duration-500 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="group relative">
              <div className="text-2xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent hover:from-gray-600 hover:via-red-500 hover:to-orange-500 transition-all duration-500 tracking-tight transform group-hover:scale-105">
                NEXORA
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-gray-600 group-hover:w-full transition-all duration-300"></div>
            </a>

            <div className="hidden lg:flex items-center space-x-2 bg-white/40 backdrop-blur-lg rounded-full px-6 py-2 border border-white/30">
              {navLinks.map(link => {
                const Icon = link.icon;
                return (
                  <a key={link.href} href={link.href} className="group flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-white font-medium rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105">
                    <Icon size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-gray-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-white/20">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-500 w-4 h-4 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search startups..."
                    className="pl-11 pr-4 py-3 w-80 bg-transparent text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-0 text-sm font-medium"
                  />
                </div>
              </div>

              {user ? (
                <div className="flex items-center space-x-3">
                  <a href="/dashboard" className="group flex items-center space-x-3 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-white/50" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-gray-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {user.email?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <span className="font-semibold text-gray-600">Dashboard</span>
                  </a>
                  <button
                    onClick={handleLogout}
                    className="group p-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/30 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-gray-600"
                  >
                    <LogOut size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  </button>
                </div>
              ) : (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-gray-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <a href="/login-signup" className="relative block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-red-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    Get Started
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-black"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} size={20} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} size={20} />
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 p-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl animate-in slide-in-from-top duration-300">
              <div className="relative group mb-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-gray-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-white/20">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-500 w-4 h-4 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search startups..."
                    className="w-full pl-11 pr-4 py-3 bg-transparent text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.href} href={link.href} className="group flex items-center space-x-4 px-4 py-3 text-gray-700 hover:text-white font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <Icon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/30">
                {user ? (
                  <div className="space-y-3">
                    <a href="/dashboard" className="flex items-center space-x-4 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-white/50" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-gray-600 flex items-center justify-center text-white font-bold">
                          {user.email?.[0]?.toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-black">Dashboard</div>
                        <div className="text-sm opacity-70">ID: {user.uid.slice(0, 8)}...</div>
                      </div>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/20 text-red-600 hover:bg-red-500 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-gray-600 rounded-xl blur opacity-75"></div>
                    <a href="/login-signup" className="relative block px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center font-bold rounded-xl hover:from-red-500 hover:to-gray-600 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </ClientOnly>
  );
}
