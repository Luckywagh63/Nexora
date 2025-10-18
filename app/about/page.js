"use client";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <div className="inline-block">
              <div className="w-24 h-24 border border-amber-500/30 flex items-center justify-center mb-12">
                <span className="text-5xl font-light text-white tracking-tight">N</span>
              </div>
            </div>
          </div>

          <h1 className="text-8xl md:text-9xl font-light mb-12 text-white tracking-tight leading-none">
            NEXORA
          </h1>

          <p className="text-2xl md:text-3xl mb-16 text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Connecting visionary entrepreneurs with forward-thinking investors to create an ecosystem where innovation thrives
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="border border-gray-900 px-8 py-3 hover:border-amber-500/30 transition-all">
              <span className="text-gray-500 font-light text-sm tracking-wide">Innovation First</span>
            </div>
            <div className="border border-gray-900 px-8 py-3 hover:border-amber-500/30 transition-all">
              <span className="text-gray-500 font-light text-sm tracking-wide">Premium Quality</span>
            </div>
            <div className="border border-gray-900 px-8 py-3 hover:border-amber-500/30 transition-all">
              <span className="text-gray-500 font-light text-sm tracking-wide">Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section with Image */}
      <section className="relative py-32 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Our Foundation</span>
              </div>
              <h2 className="text-6xl font-light mb-6 text-white tracking-tight">
                Built on Principles
              </h2>
              <p className="text-xl text-gray-600 font-light">
                That drive innovation and create lasting value for every stakeholder in our ecosystem.
              </p>
            </div>
            <div className="border border-gray-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaboration"
                className="w-full h-96 object-cover opacity-70 hover:opacity-80 hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group border border-gray-900 p-12 hover:border-gray-800 transition-all">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mr-6 group-hover:border-amber-500/50 transition-all">
                  <Target className="w-8 h-8 text-amber-500/70 stroke-[1.5]" />
                </div>
                <h3 className="text-3xl font-light text-white tracking-tight">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                To democratize startup investment by providing a transparent, secure platform that connects innovative startups with the capital they need to scale and succeed in the digital economy.
              </p>
            </div>

            <div className="group border border-gray-900 p-12 hover:border-gray-800 transition-all">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mr-6 group-hover:border-amber-500/50 transition-all">
                  <TrendingUp className="w-8 h-8 text-amber-500/70 stroke-[1.5]" />
                </div>
                <h3 className="text-3xl font-light text-white tracking-tight">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                To become the global leader in startup investment platforms, fostering the next generation of unicorn companies and creating sustainable value for all stakeholders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Core Values</span>
            </div>
            <h2 className="text-6xl font-light mb-6 text-white tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "Building bridges between innovators and investors to create meaningful partnerships."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Maintaining the highest standards in vetting opportunities and supporting growth."
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Embracing cutting-edge solutions and forward-thinking investment strategies."
              }
            ].map((value, i) => (
              <div key={i} className="group border border-gray-900 p-8 hover:border-gray-800 transition-all">
                <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-8 group-hover:border-amber-500/30 transition-all">
                  <value.icon className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: "$4.2B", label: "Assets Under Management" },
              { value: "1,850+", label: "Portfolio Companies" },
              { value: "500+", label: "Active Investors" },
              { value: "94%", label: "Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center border border-gray-900 p-8 hover:border-gray-800 transition-all">
                <div className="text-6xl font-light text-white mb-4 tracking-tight">{stat.value}</div>
                <div className="text-sm text-gray-600 font-light tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mx-auto mb-12">
            <Award className="w-8 h-8 text-amber-500/70 stroke-[1.5]" />
          </div>
          
          <h2 className="text-6xl font-light text-white mb-8 tracking-tight leading-tight">
            Join Our Vision
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 font-light max-w-2xl mx-auto">
            Be part of the next generation of innovation and investment excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-amber-500 text-black px-12 py-4 font-light tracking-wide hover:bg-amber-400 transition-all">
              Get Started
            </button>
            <button className="border border-gray-800 text-gray-500 hover:text-white hover:border-gray-700 px-12 py-4 font-light tracking-wide transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
