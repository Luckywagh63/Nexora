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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Startup Not Found</h1>
          <p className="text-slate-600 mb-6">The startup you're looking for doesn't exist or has been removed.</p>
          <Link href="/business" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors inline-flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Startups</span>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-slate-800">Nexora</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/business" className="text-slate-600 hover:text-orange-500 text-sm font-medium transition-colors">
                All Startups
              </Link>
              <Link href="/form" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Add Startup
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/business" className="text-slate-300 hover:text-white transition-colors inline-flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Startups</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-12 w-12 text-orange-400" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {startup.name}
                  </h1>
                  <p className="text-xl text-slate-200 mt-2">
                    Founded by {startup.firstName} {startup.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                  {startup.industry}
                </span>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    {startup.isUSIncorporated === 'yes' ? 'US Incorporated' : 'International'}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-black">
              <h3 className="text-lg font-semibold mb-4">Company Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Product Available</span>
                  {startup.productAvailable === 'yes' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-slate-400" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Generating Revenue</span>
                  {startup.generatingRevenue === 'yes' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-slate-400" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">US Incorporated</span>
                  {startup.isUSIncorporated === 'yes' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-slate-400" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-slate-800">About {startup.name}</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {startup.description}
              </p>
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Building className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-slate-800">Company Details</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Industry
                    </h3>
                    <p className="text-slate-800 font-medium">{startup.industry}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Incorporation Status
                    </h3>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span className="text-slate-800 font-medium">
                        {startup.isUSIncorporated === 'yes' ? 'United States' : 'International'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Product Status
                    </h3>
                    <div className="flex items-center space-x-2">
                      {startup.productAvailable === 'yes' ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-slate-800 font-medium">Available in Market</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-slate-400" />
                          <span className="text-slate-800 font-medium">In Development</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Revenue Status
                    </h3>
                    <div className="flex items-center space-x-2">
                      {startup.generatingRevenue === 'yes' ? (
                        <>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-slate-800 font-medium">Revenue Generating</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-slate-400" />
                          <span className="text-slate-800 font-medium">Pre-Revenue</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <DollarSign className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-slate-800">Funding Information</h2>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {formatFunding(startup.fundingAmount)}
                  </div>
                  <p className="text-orange-700 font-medium">Total Funding Raised</p>
                  <p className="text-sm text-orange-600 mt-2">
                    {startup.fundingAmount ?
                      'Includes angel, venture capital, loans, grants, and token sales' :
                      'Funding details not disclosed'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-slate-800">Contact Information</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-500">Founder</p>
                  <p className="font-medium text-slate-800">
                    {startup.firstName} {startup.lastName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <a href={`mailto:${startup.email}`} className="text-orange-600 hover:text-orange-700 font-medium">
                      {startup.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-slate-800">Timeline</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-slate-500">Listed on Platform</p>
                    <p className="font-medium text-slate-800">{formatDate(startup.createdAt)}</p>
                  </div>
                </div>

                {startup.updatedAt !== startup.createdAt && (
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-slate-500">Last Updated</p>
                      <p className="font-medium text-slate-800">{formatDate(startup.updatedAt)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pitch Deck Resources */}
            {startup.pitchDeck && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-5 w-5 text-orange-500" />
                  <h3 className="text-lg font-semibold text-slate-800">Pitch Deck</h3>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-800 truncate max-w-[160px]">
                        {startup.pitchDeck.split('/').pop().split('?')[0] || 'Pitch Deck'}
                      </p>
                      <p className="text-xs text-slate-500">Company presentation</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {/* VIEW LINK USING IFRAME OPENING */}
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
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>View</span>
                    </a>


                    {/* DOWNLOAD LINK */}
                    <a
                      href={startup.pitchDeck}
                      download
                      className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                    >
                      <Download className="h-3 w-3" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            )}


            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Interested in this startup?</h3>
              <p className="text-orange-100 text-sm mb-4">
                Connect with the founder to learn more about investment opportunities
              </p>
              <a
                href={`mailto:${startup.email}?subject=Interest in ${startup.name}`}
                className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors inline-flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Founder</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Nexora</span>
          </div>
          <p className="text-slate-400 text-center mb-4">Building Your Vision with Precision</p>
          <div className="flex justify-center space-x-8 text-sm">
            <Link href="/business" className="text-slate-400 hover:text-white transition-colors">
              All Startups
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/form" className="text-slate-400 hover:text-white transition-colors">
              Add Startup
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Contact: support@nexora.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
