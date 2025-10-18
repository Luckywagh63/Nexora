"use client";
import { useState } from 'react';
import { ChevronDown, Building2, DollarSign, MapPin, Users, FileText, ArrowRight, ArrowLeft } from 'lucide-react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
    fundingAmount: '',
    isUSIncorporated: '',
    productAvailable: '',
    generatingRevenue: '',
    pitchDeck: null,
    name: '',
    description: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const industries = [
    'Artificial Intelligence',
    'Healthcare Technology',
    'Financial Technology',
    'Clean Energy',
    'Cybersecurity',
    'Aerospace',
    'Biotechnology',
    'Enterprise Software',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
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
              <span className="text-sm text-gray-600 font-light">Need Assistance?</span>
              <button className="text-amber-500/70 hover:text-amber-500 text-sm font-light tracking-wide transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 border-b border-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Application Portal</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Submit Your
            <span className="block text-amber-500/90 mt-2">Investment Proposal</span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Present your venture to our investment committee. All submissions are reviewed with strict confidentiality.
          </p>
          
          <div className="bg-gray-900 border border-gray-800 p-6 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Your information is protected under institutional-grade security protocols. Complete all sections for full consideration.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-16">
          {[
            { num: 1, label: 'Contact' },
            { num: 2, label: 'Company' },
            { num: 3, label: 'Financials' },
            { num: 4, label: 'Documentation' }
          ].map((step, idx) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 border flex items-center justify-center text-sm font-light transition-all ${
                  currentStep >= step.num
                    ? 'border-amber-500/50 bg-amber-500/10 text-amber-500'
                    : 'border-gray-800 text-gray-600'
                }`}>
                  {step.num}
                </div>
                <span className={`mt-3 text-xs font-light tracking-wide transition-colors ${
                  currentStep >= step.num ? 'text-amber-500/70' : 'text-gray-700'
                }`}>
                  {step.label}
                </span>
              </div>
              {idx < 3 && (
                <div className={`w-32 h-px mx-4 transition-all ${
                  currentStep > step.num ? 'bg-amber-500/30' : 'bg-gray-900'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-gray-900 border border-gray-800">
          <div className="p-12">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-12">
                  <Users className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                  <h2 className="text-3xl font-light text-white tracking-tight">Contact Information</h2>
                </div>

                <p className="text-gray-500 mb-12 font-light leading-relaxed">
                  Primary contact details for this application.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors"
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Startup Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-12">
                  <Building2 className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                  <h2 className="text-3xl font-light text-white tracking-tight">Company Profile</h2>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors"
                    placeholder="Enter company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Company Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="Describe your company's mission, value proposition, and market opportunity"
                    required
                  />
                  <p className="text-xs text-gray-600 mt-3 font-light">
                    Articulate your competitive advantage and target market positioning.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Industry Sector
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="">Select industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Company Details */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-12">
                  <DollarSign className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                  <h2 className="text-3xl font-light text-white tracking-tight">Financial Overview</h2>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Total Capital Raised
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-black border border-gray-800 text-white font-light focus:border-amber-500/50 focus:outline-none transition-colors"
                      placeholder="1,000,000"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-3 font-light">
                    Total funding including equity, debt, grants, and alternative financing.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-4 tracking-wide">
                    United States Incorporation Status
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('isUSIncorporated', 'yes')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.isUSIncorporated === 'yes'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      Incorporated in US
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('isUSIncorporated', 'no')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.isUSIncorporated === 'no'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      International Entity
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 font-light">
                    Certain investment structures require US incorporation. International entities are still eligible for review.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Project Information */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-12">
                  <MapPin className="w-6 h-6 text-amber-500/70 stroke-[1.5]" />
                  <h2 className="text-3xl font-light text-white tracking-tight">Market Position</h2>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-4 tracking-wide">
                    Product Market Availability
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('productAvailable', 'yes')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.productAvailable === 'yes'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      Market Ready
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('productAvailable', 'no')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.productAvailable === 'no'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      In Development
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 font-light">
                    Indicate if customers can currently access and utilize your product or service.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-4 tracking-wide">
                    Revenue Generation Status
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('generatingRevenue', 'yes')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.generatingRevenue === 'yes'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      Revenue Positive
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('generatingRevenue', 'no')}
                      className={`flex-1 px-6 py-4 border font-light tracking-wide transition-all ${
                        formData.generatingRevenue === 'no'
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                          : 'bg-black text-gray-400 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      Pre-Revenue
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 font-light">
                    Confirmed revenue streams strengthen investment consideration.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-3 tracking-wide">
                    Investment Documentation
                  </label>
                  <div
                    className="border border-gray-800 p-12 text-center hover:border-gray-700 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('fileInput').click()}
                  >
                    <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4 stroke-[1.5]" />
                    <p className="text-gray-400 mb-2 font-light">
                      {formData.pitchDeck ? formData.pitchDeck.name : 'Upload pitch deck or investment memorandum'}
                    </p>
                    <p className="text-xs text-gray-600 font-light">PDF, PPT, DOC · Maximum 10MB</p>
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept=".pdf,.ppt,.pptx,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          if (file.size > 10 * 1024 * 1024) {
                            alert('File size must be less than 10MB');
                            return;
                          }
                          handleInputChange('pitchDeck', file);
                        }
                      }}
                    />
                  </div>
                  {formData.pitchDeck && (
                    <div className="mt-4 flex items-center justify-between bg-black border border-gray-800 p-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-400 font-light">{formData.pitchDeck.name}</span>
                        <span className="text-xs text-gray-600 font-light">
                          ({(formData.pitchDeck.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInputChange('pitchDeck', null)}
                        className="text-gray-600 hover:text-gray-400 text-sm font-light transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-16 pt-8 border-t border-gray-800">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 px-8 py-4 font-light tracking-wide transition-all ${
                  currentStep === 1
                    ? 'bg-gray-900 text-gray-700 cursor-not-allowed border border-gray-800'
                    : 'bg-black text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white'
                }`}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-amber-500 text-black px-8 py-4 font-light tracking-wide hover:bg-amber-400 transition-all"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-amber-500 text-black px-12 py-4 font-light tracking-wide hover:bg-amber-400 transition-all"
                  onClick={handleSubmit}
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-900 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xl font-light text-white tracking-tight">Nexora</span>
          </div>
          <p className="text-gray-600 mb-6 font-light">Strategic Investment Opportunities</p>
          <p className="text-sm text-gray-700 font-light">
            Questions regarding your application? Contact investment@nexora.com
          </p>
        </div>
      </div>
    </div>
  );
}
