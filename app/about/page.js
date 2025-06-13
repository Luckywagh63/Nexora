"use client";
import { Target, Users, Award, TrendingUp, Sparkles, Zap, Shield } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="bg-stone-50 text-stone-800 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-200/40 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-r from-amber-300/20 to-stone-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-stone-300/20 to-amber-300/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Enhanced Logo */}
          <div className="mb-12 transform hover:scale-110 transition-all duration-500">
            <div className="relative inline-block group">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/30 via-stone-400/30 to-amber-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-black backdrop-blur-sm p-6 rounded-full border border-amber-200/50 shadow-2xl">
                <img 
                  src="/nexora1.png" 
                  alt="Nexora Logo" 
                  className="h-24 w-auto mx-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Main Title */}
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
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
          .animate-fade-in-up-delay { animation: fadeInUp 0.8s ease-out 0.2s both; }
        `}</style>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>
        
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
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-stone-200 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 shadow-xl hover:shadow-2xl">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-amber-200 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 hover:border-stone-300/70 transition-all duration-500 shadow-xl hover:shadow-2xl">
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

      {/* Values */}
      <section className="py-32 bg-gradient-to-b from-stone-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-stone-700 via-amber-600 to-stone-700 bg-clip-text text-transparent">
              Core Values
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Award, 
                title: 'EXCELLENCE', 
                desc: 'We maintain the highest standards in everything we do, from technology to customer service',
                gradient: 'from-amber-500 to-amber-600',
                bg: 'from-amber-50 to-amber-100'
              },
              { 
                icon: Users, 
                title: 'TRANSPARENCY', 
                desc: 'Clear communication and honest relationships with all parties, building trust through openness',
                gradient: 'from-stone-500 to-stone-600',
                bg: 'from-stone-50 to-stone-100'
              },
              { 
                icon: Target, 
                title: 'INNOVATION', 
                desc: 'Embracing cutting-edge solutions and forward-thinking approaches to solve complex problems',
                gradient: 'from-amber-600 to-stone-600',
                bg: 'from-amber-50 to-stone-50'
              }
            ].map((value, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/50 to-stone-200/50 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className={`relative bg-gradient-to-br ${value.bg} backdrop-blur-xl p-10 rounded-3xl border border-amber-200/30 hover:border-amber-300/50 transition-all duration-500 text-center shadow-xl hover:shadow-2xl group-hover:transform group-hover:scale-105`}>
                  <div className={`inline-flex p-6 bg-gradient-to-r ${value.gradient} rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <value.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-lg">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-gradient-to-r from-amber-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-stone-800">
              By The Numbers
            </h2>
            <p className="text-xl text-stone-600">
              Our impact speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { num: '250+', label: 'STARTUPS FUNDED', icon: '🚀' },
              { num: '500+', label: 'ACTIVE INVESTORS', icon: '👥' },
              { num: '$50M+', label: 'TOTAL INVESTED', icon: '💰' },
              { num: '85%', label: 'SUCCESS RATE', icon: '📈' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-black mb-4 text-amber-700 group-hover:text-amber-800 group-hover:scale-110 transition-all duration-300">
                  {stat.num}
                </div>
                <div className="text-sm font-bold tracking-widest text-stone-600 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-stone-700 to-amber-600 bg-clip-text text-transparent">
              Meet The Visionaries
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The brilliant minds behind Nexora's revolutionary platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Lucky Wagh', 
                role: 'CEO & FOUNDER', 
                img: 'https://media.self.com/photos/6226447449c0fcf6ad6d6331/4:3/w_2560%2Cc_limit/GettyImages-464955430.jpg',
                bio: '15+ years in venture capital, led $2B+ in successful investments'
              },
              { 
                name: 'Aayush Redij', 
                role: 'CTO & CO-FOUNDER', 
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                bio: 'Former tech lead at major fintech, AI/ML expert'
              },
              { 
                name: 'Ved Ringne', 
                role: 'HEAD OF INVESTMENTS & CO-FOUNDER',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                bio: 'Investment banking background, 10+ years Wall Street experience'
              }
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/40 via-stone-300/40 to-amber-300/40 rounded-full blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src={member.img}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-amber-200/50 group-hover:border-amber-300/70 transition-all duration-500 group-hover:scale-105 shadow-xl"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-4 text-lg">{member.role}</p>
                <p className="text-stone-600 leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-stone-700 to-stone-800 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-24 h-24 border border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-amber-500/20 rotate-45 animate-bounce"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <h2 className="text-7xl font-black mb-8 text-white drop-shadow-2xl">
            Ready To <span className="text-amber-400">Transform</span> The Future?
          </h2>
          <p className="text-2xl mb-12 text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Join the revolution in startup investing and help shape tomorrow's innovations today
          </p>
          <button className="group relative inline-flex items-center justify-center px-16 py-6 text-xl font-black text-white bg-amber-600/90 backdrop-blur-xl rounded-full border border-amber-500/50 hover:bg-amber-700 hover:border-amber-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
              START YOUR JOURNEY
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-stone-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
}