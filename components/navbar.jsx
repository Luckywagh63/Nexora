"use client";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, Search, LogOut } from "lucide-react";

export default function NexoraNavbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const user = session?.user;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/business", label: "Explore" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
          : "bg-black/80 backdrop-blur-md border-b border-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="group">
            <span className="text-xl font-light text-white tracking-tight group-hover:text-amber-500 transition-colors">
              NEXORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white font-light text-sm tracking-wide transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search box */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 stroke-[1.5]" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-56 bg-gray-900/50 text-white placeholder-gray-600 border border-gray-800 focus:outline-none focus:border-amber-500/50 text-sm font-light tracking-wide transition-all"
              />
            </div>

            {/* Authenticated user */}
            {user ? (
              <div className="flex items-center gap-4">
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 border border-gray-800 hover:border-gray-700 transition-all"
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt="Profile"
                      className="w-7 h-7 rounded-full"
                    />
                  ) : (
                    <div className="w-7 h-7 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 text-xs font-light">
                      {user.email?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <span className="font-light text-white text-sm tracking-wide">
                    {user.name?.split(" ")[0] || "Dashboard"}
                  </span>
                </a>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-950/20 border border-gray-800 hover:border-red-900/30 transition-all"
                >
                  <LogOut size={16} className="stroke-[1.5]" />
                </button>
              </div>
            ) : (
              <>
                <a href="/auth">
                  <button className="text-gray-500 hover:text-white font-light text-sm tracking-wide transition-colors">
                    Sign In
                  </button>
                </a>
                <a href="/auth">
                  <button className="bg-amber-500 text-black px-6 py-2.5 font-light text-sm tracking-wide hover:bg-amber-400 transition-all">
                    Get Started
                  </button>
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-white border border-gray-800 hover:border-gray-700 transition-all"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="stroke-[1.5]" />
            ) : (
              <Menu size={20} className="stroke-[1.5]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-900 animate-in slide-in-from-top duration-300">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 stroke-[1.5]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 text-white placeholder-gray-600 border border-gray-800 focus:outline-none focus:border-amber-500/50 text-sm font-light tracking-wide transition-all"
              />
            </div>

            <div className="space-y-2 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-500 hover:text-white hover:bg-gray-900/50 font-light tracking-wide transition-all border-l-2 border-transparent hover:border-amber-500"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-900">
              {user ? (
                <div className="space-y-3">
                  <a
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 border border-gray-800 hover:border-gray-700 transition-all"
                  >
                    {user.image ? (
                      <img
                        src={user.image}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 font-light">
                        {user.email?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div className="font-light text-white">
                        {user.name?.split(" ")[0] || "Dashboard"}
                      </div>
                      <div className="text-xs text-gray-600 font-light">
                        View portfolio
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-950/20 text-red-400 hover:bg-red-950/30 border border-red-900/30 font-light tracking-wide transition-all"
                  >
                    <LogOut size={16} className="stroke-[1.5]" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <a href="/auth">
                    <button className="w-full text-gray-500 hover:text-white font-light py-3 border border-gray-800 hover:border-gray-700 tracking-wide transition-all">
                      Sign In
                    </button>
                  </a>
                  <a href="/auth">
                    <button className="w-full bg-amber-500 text-black py-3 font-light tracking-wide hover:bg-amber-400 transition-all mt-4">
                      Get Started
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
