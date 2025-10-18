// /app/show/[id]/page.jsx
import dbConnect from '@/lib/dbConnect';
import Startup from '@/models/Startup';
import Link from 'next/link';
import {
  Building2,
  DollarSign,
  MapPin,
  Users,
  Calendar,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Mail,
  FileText,
  Building,
  TrendingUp,
  Award,
  Download,
  ExternalLink
} from 'lucide-react';

export default async function ShowPage({ params: rawParams }) {
  const params = await rawParams;
  const { id } = params;

  await dbConnect();
  const startup = await Startup.findById(id).lean();
  
  if (!startup) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
        <div className="text-center relative z-10">
          <Building2 className="w-16 h-16 text-gray-700 mx-auto mb-6 stroke-[1.5]" />
          <h1 className="text-3xl font-light text-white mb-4 tracking-tight">Company Not Found</h1>
          <p className="text-gray-500 mb-8 font-light">The company profile you're looking for is unavailable.</p>
          <Link href="/business" className="inline-flex items-center gap-2 bg-amber-500 text-black px-8 py-4 font-light tracking-wide hover:bg-amber-400 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFunding = (amount) => {
    if (!amount) return 'Not disclosed';
    const cleanAmount = amount.replace(/,/g, '');
    const num = parseInt(cleanAmount);
    if (isNaN(num)) return amount;

    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Header */}
      <div className="relative border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-2xl font-light text-white tracking-tight">Nexora</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/business" className="text-gray-400 hover:text-white text-sm font-light tracking-wide transition-colors">
                All Companies
              </Link>
              <Link href="/form" className="bg-amber-500 text-black px-6 py-3 font-light tracking-wide hover:bg-amber-400 transition-all">
                Submit Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
            <Link href="/business" className="text-gray-400 hover:text-white transition-colors font-light text-sm tracking-wide">
              Back to Portfolio
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border border-gray-800 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-amber-500/70 stroke-[1.5]" />
                </div>
                <div>
                  <h1 className="text-5xl font-light text-white tracking-tight mb-2">
                    {startup.name}
                  </h1>
                  <p className="text-xl text-gray-500 font-light">
                    {startup.firstName} {startup.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-white">
                <span className="bg-amber-500/10 border border-amber-500/30 px-4 py-2 text-sm font-light text-amber-500/90 tracking-wide">
                  {startup.industry}
                </span>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-light">
                    {startup.isUSIncorporated === 'yes' ? 'US Incorporated' : 'International'}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-lg font-light text-white mb-6 tracking-tight">Company Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <span className="text-sm font-light text-gray-400">Product Available</span>
                  {startup.productAvailable === 'yes' ? (
                    <CheckCircle className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                  )}
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <span className="text-sm font-light text-gray-400">Revenue Generating</span>
                  {startup.generatingRevenue === 'yes' ? (
                    <CheckCircle className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-400">US Incorporated</span>
                  {startup.isUSIncorporated === 'yes' ? (
                    <CheckCircle className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div className="bg-gray-900 border border-gray-800 p-10">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                <h2 className="text-3xl font-light text-white tracking-tight">Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                {startup.description}
              </p>
            </div>

            {/* Company Details */}
            <div className="bg-gray-900 border border-gray-800 p-10">
              <div className="flex items-center gap-3 mb-8">
                <Building className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                <h2 className="text-3xl font-light text-white tracking-tight">Company Profile</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-light text-gray-600 uppercase tracking-[0.2em] mb-3">
                      Industry Sector
                    </h3>
                    <p className="text-white font-light text-lg">{startup.industry}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-light text-gray-600 uppercase tracking-[0.2em] mb-3">
                      Incorporation
                    </h3>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-500/70" />
                      <span className="text-white font-light text-lg">
                        {startup.isUSIncorporated === 'yes' ? 'United States' : 'International'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-light text-gray-600 uppercase tracking-[0.2em] mb-3">
                      Product Status
                    </h3>
                    <div className="flex items-center gap-2">
                      {startup.productAvailable === 'yes' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-amber-500/70" />
                          <span className="text-white font-light text-lg">Market Ready</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-gray-700" />
                          <span className="text-white font-light text-lg">In Development</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-light text-gray-600 uppercase tracking-[0.2em] mb-3">
                      Revenue Status
                    </h3>
                    <div className="flex items-center gap-2">
                      {startup.generatingRevenue === 'yes' ? (
                        <>
                          <TrendingUp className="w-4 h-4 text-amber-500/70" />
                          <span className="text-white font-light text-lg">Revenue Positive</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-gray-700" />
                          <span className="text-white font-light text-lg">Pre-Revenue</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Information */}
            <div className="bg-gray-900 border border-gray-800 p-10">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                <h2 className="text-3xl font-light text-white tracking-tight">Capital Structure</h2>
              </div>

              <div className="bg-black border border-amber-500/20 p-8 text-center">
                <div className="text-5xl font-light text-amber-500/90 mb-3 tracking-tight">
                  {formatFunding(startup.fundingAmount)}
                </div>
                <p className="text-gray-400 font-light mb-2">Total Capital Raised</p>
                <p className="text-sm text-gray-600 font-light">
                  {startup.fundingAmount ?
                    'Aggregate funding across all financing rounds' :
                    'Funding details undisclosed'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                <h3 className="text-lg font-light text-white tracking-tight">Contact</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-600 font-light mb-2 uppercase tracking-[0.2em]">Founder</p>
                  <p className="font-light text-white text-lg">
                    {startup.firstName} {startup.lastName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 font-light mb-2 uppercase tracking-[0.2em]">Email</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-500/70" />
                    <a href={`mailto:${startup.email}`} className="text-amber-500/70 hover:text-amber-500 font-light transition-colors">
                      {startup.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                <h3 className="text-lg font-light text-white tracking-tight">Timeline</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500/70 rounded-full mt-2"></div>
                  <div>
                    <p className="text-xs text-gray-600 font-light uppercase tracking-[0.2em]">Platform Entry</p>
                    <p className="font-light text-white mt-1">{formatDate(startup.createdAt)}</p>
                  </div>
                </div>

                {startup.updatedAt !== startup.createdAt && (
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                    <div>
                      <p className="text-xs text-gray-600 font-light uppercase tracking-[0.2em]">Last Updated</p>
                      <p className="font-light text-white mt-1">{formatDate(startup.updatedAt)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pitch Deck */}
            {startup.pitchDeck && (
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                  <h3 className="text-lg font-light text-white tracking-tight">Documentation</h3>
                </div>

                <div className="bg-black border border-gray-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-amber-500/70" />
                      <div>
                        <p className="text-sm font-light text-white">
                          Investment Deck
                        </p>
                        <p className="text-xs text-gray-600 font-light">Company presentation</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={
                          (() => {
                            const url = startup.pitchDeck;
                            const ext = url?.split('.').pop()?.toLowerCase();
                            const useViewer = ['pdf', 'doc', 'docx', 'ppt', 'pptx'].includes(ext);
                            return useViewer
                              ? `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`
                              : url;
                          })()
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-amber-500/70 hover:text-amber-500 text-xs font-light tracking-wide transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View
                      </a>

                      <a
                        href={startup.pitchDeck}
                        download
                        className="flex items-center gap-1 text-amber-500/70 hover:text-amber-500 text-xs font-light tracking-wide transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-8 text-center">
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">Investment Inquiry</h3>
              <p className="text-amber-500/70 text-sm font-light mb-6 leading-relaxed">
                Contact the founder to discuss investment opportunities
              </p>
              <a
                href={`mailto:${startup.email}?subject=Investment Inquiry: ${startup.name}`}
                className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 font-light tracking-wide hover:bg-amber-400 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Founder
              </a>
            </div>
          </div>
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
            <Link href="/business" className="text-gray-600 hover:text-gray-400 transition-colors font-light">
              All Companies
            </Link>
            <span className="text-gray-800">|</span>
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
