"use client";
import { useState, useEffect } from 'react';

export default function StartupShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-800 pt-16 md:pt-20">
      {/* Hero Section - Responsive Split */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-0 bg-gradient-to-br from-amber-50 to-stone-100 relative overflow-hidden">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 border border-amber-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-8 h-8 sm:w-16 sm:h-16 bg-amber-200/60 rotate-45"></div>
          
          <div className="z-10">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-none">
              <div className="text-stone-800">DISCOVER.</div>
              <div className="text-amber-600">INVEST.</div>
              <div className="text-stone-700">GROW.</div>
            </div>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-md">
              Connect with revolutionary startups and transform your investment portfolio with next-generation companies.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/form">
              <button className="bg-amber-600 text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-none font-bold hover:bg-amber-700 transition-colors cursor-pointer shadow-lg">
                START INVESTING
              </button>
            </Link>
            <Link href="/business">
              <button className="border-2 border-stone-600 text-stone-600 px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-stone-600 hover:text-white cursor-pointer transition-all">
                VIEW STARTUPS
              </button>
            </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div 
          className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/20"></div>
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-xl sm:text-2xl font-black text-cream">
            NEXORA<span className="text-amber-400">.</span>
          </div>
        </div>
      </section>

      {/* Stats Bar - Responsive Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-amber-100 to-stone-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { num: '250+', label: 'STARTUPS FUNDED' },
              { num: '500+', label: 'ACTIVE INVESTORS' },
              { num: '$50M+', label: 'TOTAL INVESTED' },
              { num: '85%', label: 'SUCCESS RATE' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-2xl sm:text-4xl font-black mb-2 text-amber-700 group-hover:text-amber-800 transition-colors">{stat.num}</div>
                <div className="text-xs sm:text-sm font-bold tracking-widest text-stone-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Responsive */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-800 mb-4">OUR FOCUS</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              {
                title: 'FINTECH',
                desc: 'Revolutionary financial technologies disrupting traditional banking',
                img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'HEALTHTECH',
                desc: 'Innovative healthcare solutions improving lives worldwide',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'AI & MACHINE LEARNING',
                desc: 'Cutting-edge artificial intelligence transforming industries',
                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              }
            ].map((service, i) => (
              <div key={i} className="group relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{backgroundImage: `url('${service.img}')`}}
                ></div>
                <div className="absolute inset-0 bg-stone-900/50 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
                
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 text-cream">{service.title}</h3>
                  <p className="text-stone-200 max-w-xs leading-relaxed text-sm sm:text-base">{service.desc}</p>
                  <div className="w-12 h-1 bg-amber-500 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section - Responsive Layout */}
      <section className="py-16 sm:py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight text-stone-800">
                CONNECTING
                <br />
                <span className="text-amber-600">VISION WITH CAPITAL</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  'Curated high-potential startups',
                  'Comprehensive due diligence reports',
                  'Direct founder connections',
                  'Portfolio management tools'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-600 mr-3 sm:mr-4 rotate-45"></div>
                    <span className="text-base sm:text-lg text-stone-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-stone-700 text-cream px-6 sm:px-8 py-3 font-bold hover:bg-stone-800 transition-colors">
                LEARN MORE
              </button>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 sm:p-8 relative shadow-2xl">
                <div className="text-4xl sm:text-6xl font-black text-right mb-4 text-cream">120%</div>
                <div className="text-right text-cream">
                  <p className="font-bold mb-2 text-lg sm:text-xl">AVERAGE ROI</p>
                  <p className="text-amber-100 leading-relaxed text-sm sm:text-base">Our portfolio companies have generated exceptional returns for our investor community.</p>
                </div>
                
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-amber-300"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-amber-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Startups Showcase - Responsive Grid */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-stone-800">TOP STARTUPS</h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">Discover the most promising startups ready for investment</p>
            <div className="w-20 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'VERIDIAN AI',
                category: 'Artificial Intelligence',
                funding: '$2.5M Seed',
                description: 'Revolutionary AI platform for predictive healthcare analytics',
                img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'QUANTUM LEDGER',
                category: 'Blockchain Finance',
                funding: '$5M Series A',
                description: 'Next-gen DeFi platform with quantum-secure transactions',
                img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'BIOSYNTH',
                category: 'Biotechnology',
                funding: '$3.8M Pre-Series A',
                description: 'Synthetic biology solutions for sustainable manufacturing',
                img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'NEURAL DYNAMICS',
                category: 'Robotics',
                funding: '$4.2M Seed',
                description: 'Advanced robotics with human-like cognitive abilities',
                img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'CLEANTECH INNOVATIONS',
                category: 'Clean Energy',
                funding: '$6M Series A',
                description: 'Revolutionary solar technology with 45% efficiency rates',
                img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'SPACE DYNAMICS',
                category: 'Aerospace',
                funding: '$8M Series B',
                description: 'Satellite constellation for global internet connectivity',
                img: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              }
            ].map((startup, i) => (
              <div key={i} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-40 sm:h-48 bg-cover bg-center relative"
                  style={{backgroundImage: `url('${startup.img}')`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-amber-600 text-cream px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded">
                    {startup.funding}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-amber-600 font-bold mb-2 tracking-widest">{startup.category}</div>
                  <h3 className="text-lg sm:text-xl font-black text-stone-800 mb-3">{startup.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{startup.description}</p>
                  
                  <button className="w-full bg-stone-100 hover:bg-amber-600 hover:text-cream text-stone-700 font-bold py-2 px-4 transition-colors duration-300 text-sm sm:text-base">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Testimonial - Responsive */}
<section className="py-16 sm:py-24 bg-gradient-to-br from-amber-50 to-stone-100">
  <div className="max-w-4xl mx-auto px-6 sm:px-8">
    <div className="bg-cream p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl border border-stone-200">
      <div className="flex justify-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-amber-500 text-xl sm:text-2xl">★</span>
        ))}
      </div>
      <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 italic leading-relaxed mb-8 text-center">
        &quot;Nexora&apos;s platform helped me identify and invest in three startups that have already returned 3x my initial investment. Exceptional curation and support.&quot;
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg sm:text-xl">
          SL
        </div>
        <div className="text-center sm:text-left">
          <p className="font-bold text-stone-800">Sarah Lopez</p>
          <p className="text-stone-600 text-sm sm:text-base">Angel Investor & Venture Partner</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section - Responsive */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-stone-700 to-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 border border-amber-400/30 rounded-full"></div>
          <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-10 h-10 sm:w-20 sm:h-20 bg-amber-500/20 rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-8 text-cream">
            START YOUR
            <br />
            <span className="text-amber-400">INVESTMENT JOURNEY</span>
          </h2>
          
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-stone-300">
            Join our exclusive community of investors and discover the next unicorn startups.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-12">
            <div>
              <div className="text-lg sm:text-2xl font-black mb-2 text-amber-400">CALL</div>
              <div className="text-stone-300 text-sm sm:text-base">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black mb-2 text-amber-400">EMAIL</div>
              <div className="text-stone-300 text-sm sm:text-base">invest@nexora.com</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black mb-2 text-amber-400">VISIT</div>
              <div className="text-stone-300 text-sm sm:text-base">123 Venture Street</div>
            </div>
          </div>

          <button className="bg-amber-600 text-cream px-8 sm:px-12 py-3 sm:py-4 font-black text-base sm:text-lg hover:bg-amber-700 transition-colors shadow-lg">
            JOIN INVESTOR NETWORK
          </button>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="py-8 sm:py-12 bg-stone-900 border-t border-stone-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="text-2xl sm:text-3xl font-black mb-4 text-cream">
            NEXORA<span className="text-amber-400">.</span>
          </div>
          <p className="text-stone-400 text-sm sm:text-base">© 2024 Nexora Ventures. Connecting visionaries with capital.</p>
        </div>
      </footer>
    </div>
  );
}
