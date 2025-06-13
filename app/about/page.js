"use client";
import Image from "next/image";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-stone-50 text-stone-800 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100 text-center relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-amber-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-200/40 rotate-45 animate-bounce" />
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-r from-amber-300/20 to-stone-300/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-stone-300/20 to-amber-300/20 rounded-full blur-2xl animate-pulse animation-delay-2000" />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="mb-12 transform hover:scale-110 transition-all duration-500">
            <div className="relative inline-block group">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/30 via-stone-400/30 to-amber-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black backdrop-blur-sm p-6 rounded-full border border-amber-200/50 shadow-2xl">
                <Image
                  src="/nexora1.png"
                  alt="Nexora Logo"
                  width={96}
                  height={96}
                  className="h-24 w-auto mx-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-stone-800 via-amber-700 to-stone-800 bg-clip-text text-transparent leading-tight animate-fade-in-up">
            NEXORA
          </h1>

          <p className="text-2xl md:text-3xl mb-12 text-stone-600 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Connecting visionary entrepreneurs with forward-thinking investors to create an ecosystem where innovation thrives
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="bg-amber-100/80 backdrop-blur-sm rounded-full px-8 py-3 border border-amber-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="text-amber-800 font-semibold">🚀 Innovation First</span>
            </div>
            <div className="bg-stone-100/80 backdrop-blur-sm rounded-full px-8 py-3 border border-stone-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="text-stone-700 font-semibold">💎 Premium Quality</span>
            </div>
            <div className="bg-amber-100/80 backdrop-blur-sm rounded-full px-8 py-3 border border-amber-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="text-amber-800 font-semibold">⚡ Excellence</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }
          .animate-fade-in-up-delay {
            animation: fadeInUp 0.8s ease-out 0.2s both;
          }
        `}</style>
      </section>

      {/* Foundation Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Built on principles that drive innovation and create lasting value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-stone-200 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mr-6 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-stone-800">MISSION</h3>
                </div>
                <p className="text-lg text-stone-600 leading-relaxed">
                  To democratize startup investment by providing a transparent, secure platform that connects innovative startups with the capital they need to scale and succeed in the digital economy.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-amber-200 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl mr-6 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-stone-800">VISION</h3>
                </div>
                <p className="text-lg text-stone-600 leading-relaxed">
                  To become the global leader in startup investment platforms, fostering the next generation of unicorn companies and creating sustainable value for all stakeholders worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections (Core Values, Stats, Team, CTA) would go here */}
    </div>
  );
}
