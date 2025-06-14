// /app/business/page.jsx
import dbConnect from '@/lib/dbConnect';
import Startup from '@/models/Startup';
import Link from 'next/link';
import { Building2, DollarSign, MapPin, Users, Calendar, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovative Startups
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Discover the next generation of companies revolutionizing construction, real estate, and technology
            </p>
            <div className="flex items-center justify-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{startups.length}</div>
                <div className="text-sm text-slate-300">Active Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">
                  {startups.filter(s => s.generatingRevenue === 'yes').length}
                </div>
                <div className="text-sm text-slate-300">Revenue Generating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">
                  {startups.filter(s => s.isUSIncorporated === 'yes').length}
                </div>
                <div className="text-sm text-slate-300">US Incorporated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {startups.length === 0 ? (
          <div className="text-center py-16">
            <Building2 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No startups listed yet</h3>
            <p className="text-slate-500 mb-6">Be the first to add your startup to our platform</p>
            <Link href="/form" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors inline-flex items-center space-x-2">
              <span>Add Your Startup</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Startups</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore innovative companies that are shaping the future of their industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startups.map((startup) => (
                <div key={startup._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <Building2 className="h-8 w-8" />
                      <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full text-black">
                        {startup.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                    <p className="text-orange-100 text-sm">
                      Founded by {startup.firstName} {startup.lastName}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {startup.description.length > 120 
                        ? `${startup.description.substring(0, 120)}...` 
                        : startup.description
                      }
                    </p>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        {startup.productAvailable === 'yes' ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-slate-400" />
                        )}
                        <span className="text-sm text-slate-600">Product Available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {startup.generatingRevenue === 'yes' ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-slate-400" />
                        )}
                        <span className="text-sm text-slate-600">Revenue Generating</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <DollarSign className="h-4 w-4 text-orange-500" />
                        <span>Funding: {formatFunding(startup.fundingAmount)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span>
                          {startup.isUSIncorporated === 'yes' ? 'US Incorporated' : 'International'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span>Listed: {formatDate(startup.createdAt)}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link 
                      href={`/show/${startup._id}`} 
                      className="w-full bg-slate-100 hover:bg-gray-700 text-slate-700 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Platform?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Showcase your startup to potential investors and partners
          </p>
          <Link href="/form" className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors inline-flex items-center space-x-2">
            <span>Add Your Startup</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Nexora</span>
          </div>
          <p className="text-slate-400 text-center mb-4">Building Your Vision with Precision</p>
          <div className="flex justify-center space-x-8 text-sm">
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