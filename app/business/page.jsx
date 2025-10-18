// /app/business/page.jsx
import dbConnect from '@/lib/dbConnect';
import Startup from '@/models/Startup';
import Link from 'next/link';
import { Building2, DollarSign, MapPin, Users, Calendar, ArrowRight, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export default async function BusinessPage() {
  await dbConnect();
  const startups = await Startup.find({ status: 'approved' }).lean();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatFunding = (amount) => {
    if (!amount) return 'Not disclosed';
    const num = parseInt(amount.replace(/,/g, ''));
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

    

      {/* Hero Section */}
      <div className="relative py-24 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Investment Portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
              Featured Investment
              <span className="block text-amber-500/90 mt-2">Opportunities</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              Curated portfolio of high-growth companies across technology, healthcare, and sustainable industries
            </p>
            
            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t border-gray-900">
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2 tracking-tight">{startups.length}</div>
                <div className="text-xs text-gray-600 font-light tracking-wide uppercase">Active Companies</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2 tracking-tight">
                  {startups.filter(s => s.generatingRevenue === 'yes').length}
                </div>
                <div className="text-xs text-gray-600 font-light tracking-wide uppercase">Revenue Positive</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2 tracking-tight">
                  {startups.filter(s => s.isUSIncorporated === 'yes').length}
                </div>
                <div className="text-xs text-gray-600 font-light tracking-wide uppercase">US Incorporated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {startups.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-20 h-20 border border-gray-800 flex items-center justify-center mx-auto mb-8">
              <Building2 className="w-10 h-10 text-gray-700 stroke-[1.5]" />
            </div>
            <h3 className="text-3xl font-light text-white mb-4 tracking-tight">No Active Listings</h3>
            <p className="text-gray-500 mb-12 font-light text-lg">Be among the first to present your investment opportunity</p>
            <Link href="/form" className="inline-flex items-center gap-2 bg-amber-500 text-black px-8 py-4 font-light tracking-wide hover:bg-amber-400 transition-all">
              Submit Your Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            <div className="text-center">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Current Listings</span>
              </div>
              <h2 className="text-5xl font-light text-white tracking-tight mb-6">
                Investment Portfolio
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                Rigorously vetted companies positioned for institutional investment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startups.map((startup) => (
                <div key={startup._id} className="group cursor-pointer border border-gray-900 hover:border-gray-800 transition-all">
                  {/* Card Header */}
                  <div className="bg-gray-900 border-b border-gray-800 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 border border-gray-800 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                      </div>
                      <span className="text-xs bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-amber-500/90 font-light tracking-wider uppercase">
                        {startup.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2 tracking-tight">{startup.name}</h3>
                    <p className="text-gray-500 text-sm font-light">
                      {startup.firstName} {startup.lastName}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className="text-gray-500 mb-8 font-light leading-relaxed text-sm line-clamp-3">
                      {startup.description.length > 120 
                        ? `${startup.description.substring(0, 120)}...` 
                        : startup.description
                      }
                    </p>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-900">
                      <div className="flex items-center gap-2">
                        {startup.productAvailable === 'yes' ? (
                          <CheckCircle className="w-4 h-4 text-amber-500/70 stroke-[1.5]" />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                        )}
                        <span className="text-xs text-gray-600 font-light">Market Ready</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {startup.generatingRevenue === 'yes' ? (
                          <CheckCircle className="w-4 h-4 text-amber-500/70 stroke-[1.5]" />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                        )}
                        <span className="text-xs text-gray-600 font-light">Revenue Positive</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
                        <DollarSign className="w-4 h-4 text-amber-500/70" />
                        <span>{formatFunding(startup.fundingAmount)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
                        <MapPin className="w-4 h-4 text-amber-500/70" />
                        <span>
                          {startup.isUSIncorporated === 'yes' ? 'US Incorporated' : 'International'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
                        <Calendar className="w-4 h-4 text-amber-500/70" />
                        <span>{formatDate(startup.createdAt)}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link 
                      href={`/show/${startup._id}`} 
                      className="w-full border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white py-4 px-4 font-light tracking-wide transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="border-t border-gray-900 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mx-auto mb-12">
            <Building2 className="w-8 h-8 text-amber-500/70 stroke-[1.5]" />
          </div>
          
          <h2 className="text-5xl font-light text-white mb-8 tracking-tight leading-tight">
            Ready to Present Your
            <span className="block text-amber-500/90 mt-2">Investment Opportunity?</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Submit your proposal to our investment committee for consideration
          </p>
          
          <Link href="/form" className="inline-flex items-center gap-2 bg-amber-500 text-black px-12 py-4 font-light tracking-wide hover:bg-amber-400 transition-all">
            Submit Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xl font-light text-white tracking-tight">Nexora</span>
          </div>
          <p className="text-gray-600 text-center mb-6 font-light">Strategic Investment Opportunities</p>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/form" className="text-gray-600 hover:text-gray-400 transition-colors font-light">
              Submit Proposal
            </Link>
            <span className="text-gray-800">|</span>
            <span className="text-gray-600 font-light">
              investment@nexora.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
