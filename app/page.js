"use client";
import { useState, useEffect } from 'react';
import { TrendingUp, Shield, Users, Briefcase, ArrowRight, Award, BarChart3, Target, Globe } from 'lucide-react';

export default function Nexora() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startups = [
    { name: 'NeuralFlow AI', category: 'Artificial Intelligence', stage: 'Series A', raised: '$12M', valuation: '$85M', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', desc: 'Enterprise AI platform revolutionizing decision-making with real-time predictive analytics for Fortune 500 companies.', growth: '245%', investors: 142 },
    { name: 'HealthSync Pro', category: 'Healthcare', stage: 'Series B', raised: '$28M', valuation: '$180M', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', desc: 'Integrated telemedicine platform connecting patients with specialists using advanced diagnostics.', growth: '189%', investors: 287 },
    { name: 'CryptoLedger', category: 'FinTech', stage: 'Series A', raised: '$15M', valuation: '$120M', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80', desc: 'Institutional-grade DeFi infrastructure with quantum-resistant security protocols.', growth: '312%', investors: 198 },
    { name: 'GreenTech Solutions', category: 'Energy', stage: 'Seed', raised: '$6.5M', valuation: '$42M', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80', desc: 'Next-generation solar technology achieving 52% efficiency with smart grid integration.', growth: '156%', investors: 89 },
    { name: 'DataVault Security', category: 'Cybersecurity', stage: 'Series A', raised: '$18M', valuation: '$95M', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', desc: 'Zero-trust architecture protecting enterprise data with behavioral biometric authentication.', growth: '203%', investors: 165 },
    { name: 'SpaceTech Dynamics', category: 'Aerospace', stage: 'Series C', raised: '$45M', valuation: '$320M', img: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80', desc: 'Satellite constellation providing global high-speed internet for underserved regions.', growth: '278%', investors: 412 }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-amber-500/70 font-light uppercase">Establish Together</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[0.9]">
                Strategic
                <span className="block mt-2">Investment</span>
                <span className="block mt-2 text-amber-500/90">Opportunities</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl font-light">
                Access rigorously vetted, high-growth companies across technology, healthcare, and sustainable industries. Build a diversified portfolio with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href='/form' className="w-full sm:w-auto">
                  <button className="group bg-amber-500 text-black px-8 sm:px-10 py-3 sm:py-4 font-light tracking-wide hover:bg-amber-400 transition-all flex items-center justify-center gap-3 w-full">
                    Start Investing
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href='/business' className="w-full sm:w-auto">
                  <button className="border border-gray-800 text-gray-400 px-8 sm:px-10 py-3 sm:py-4 font-light tracking-wide hover:border-gray-700 hover:text-white transition-all w-full">
                    View Startup
                  </button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-900">
                {[
                  { value: '$4.2B', label: 'Assets Under Management' },
                  { value: '1,850+', label: 'Portfolio Companies' },
                  { value: '94.2%', label: 'Average Success Rate' }
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-light tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gray-900 border border-gray-800 p-4 sm:p-6 lg:p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                  alt="Analytics Dashboard"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover opacity-70 mb-4 sm:mb-6"
                />
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-black/50 border border-amber-500/20 p-4 sm:p-6">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/70 stroke-[1.5] mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl font-light text-white mb-1">+34.7%</div>
                    <div className="text-xs text-gray-600 font-light">Average Annual Return</div>
                  </div>
                  <div className="bg-black/50 border border-gray-800 p-4 sm:p-6">
                    <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 stroke-[1.5] mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl font-light text-white mb-1">$1.8M</div>
                    <div className="text-xs text-gray-600 font-light">Avg. Portfolio Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 lg:py-20 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs text-gray-700 font-light tracking-[0.2em] uppercase mb-8 sm:mb-12">Trusted by Leading Financial Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-20">
            <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700" />
            <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700" />
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700" />
            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700" />
            <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-amber-500/70 font-light uppercase">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6 leading-tight px-4">
              Institutional-Grade
              <span className="block">Investment Platform</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Comprehensive due diligence, sophisticated analytics, and dedicated support for discerning investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {[
              { 
                icon: Shield, 
                title: 'Rigorous Verification', 
                desc: 'Multi-stage due diligence including financial audits, market validation, legal compliance reviews, and management assessments.',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: BarChart3, 
                title: 'Advanced Analytics', 
                desc: 'Proprietary algorithms analyze market trends, growth trajectories, and risk factors to identify high-potential opportunities.',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: Users, 
                title: 'Expert Network', 
                desc: 'Access to industry veterans, successful entrepreneurs, and institutional investors with proven track records.',
                img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
              }
            ].map((feature, i) => (
              <div key={i} className="group border border-gray-900 hover:border-gray-800 transition-all">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="mb-6 sm:mb-8">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/70 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="opportunities" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                <span className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-amber-500/70 font-light uppercase">Curated Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
                Featured Investment
                <span className="block">Portfolio</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 text-amber-500/70 font-light text-sm tracking-wide hover:text-amber-500 transition-colors self-start md:self-auto">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-2 sm:gap-3 mb-12 sm:mb-16 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {['all', 'Technology', 'Healthcare', 'FinTech', 'Energy', 'Manufacturing'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-light tracking-wide transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {startups.map((startup, idx) => (
              <div key={idx} className="group cursor-pointer border border-gray-900 hover:border-gray-800 transition-all">
                <div className="relative overflow-hidden bg-gray-900">
                  <img 
                    src={startup.img}
                    alt={startup.name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="text-xs font-light tracking-wider text-amber-500/90 uppercase">{startup.stage}</span>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="text-xs text-gray-500 font-light tracking-wider uppercase mb-2">{startup.category}</div>
                    <div className="text-xl sm:text-2xl font-light text-white tracking-tight">{startup.name}</div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-gray-600 font-light leading-relaxed text-sm mb-6">{startup.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 pb-6 border-t border-gray-900">
                    <div>
                      <div className="text-base sm:text-lg font-light text-white mt-4">{startup.raised}</div>
                      <div className="text-xs text-gray-700 font-light">Raised</div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-light text-white mt-4">{startup.valuation}</div>
                      <div className="text-xs text-gray-700 font-light">Valuation</div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-light text-amber-500 mt-4">+{startup.growth}</div>
                      <div className="text-xs text-gray-700 font-light">Growth</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-600 font-light">{startup.investors} Investors</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border border-amber-500/30 flex items-center justify-center mx-auto mb-8 sm:mb-12">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/70 stroke-[1.5]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-tight px-4">
            Ready to Build Your
            <span className="block text-amber-500/90 mt-2">Investment Portfolio?</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 sm:mb-16 font-light max-w-2xl mx-auto px-4">
            Join our community of sophisticated investors and gain access to vetted, high-growth opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button className="bg-amber-500 text-black px-8 sm:px-12 py-3 sm:py-4 font-light tracking-wide hover:bg-amber-400 transition-all w-full sm:w-auto">
              Schedule a Consultation
            </button>
            <button className="border border-gray-800 text-gray-400 px-8 sm:px-12 py-3 sm:py-4 font-light tracking-wide hover:border-gray-700 hover:text-white transition-all w-full sm:w-auto">
              Download Investment Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
