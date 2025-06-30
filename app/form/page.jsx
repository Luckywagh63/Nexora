'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Building2, DollarSign, MapPin, Users, FileText } from 'lucide-react';

export default function FormPage() {
  const router = useRouter();

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
    'Construction & Infrastructure',
    'Real Estate Development',
    'Architecture & Design',
    'Engineering Services',
    'Property Management',
    'Building Materials',
    'Smart City Solutions',
    'Green Technology',
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

  try {
    // ✅ 1. Upload to Cloudinary if pitchDeck is a File object
    let updatedFormData = { ...formData };

    if (formData.pitchDeck && typeof formData.pitchDeck !== 'string') {
      const uploadForm = new FormData();
      uploadForm.append('file', formData.pitchDeck);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadForm,
      });

      const uploadData = await uploadRes.json();

      // 🔥 Fix here: use uploadData.url not fileUrl
      if (uploadRes.ok && uploadData.url) {
        updatedFormData.pitchDeck = uploadData.url; // Replace File with Cloudinary URL
      } else {
        console.error('Cloudinary upload failed:', uploadData);
        alert('File upload failed. Please try again.');
        return;
      }
    }

    // ✅ 2. Submit to your API with pitchDeck URL
    const res = await fetch('/api/startup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData),
    });

    if (res.ok) {
      router.push('/business');
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
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
              <span className="text-sm text-slate-600">Need help?</span>
              <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Add Your Startup to Nexora
          </h1>
          <p className="text-xl text-slate-200 mb-8">
            Join our platform and showcase your innovative startup to potential investors
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm">
              All information submitted is confidential and secure. Complete all steps to get your startup listed.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= step
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-200 text-slate-600'
                }`}>
                {step}
              </div>
              <span className={`ml-3 text-sm font-medium ${currentStep >= step ? 'text-orange-500' : 'text-slate-500'
                }`}>
                {step === 1 && 'Basic Information'}
                {step === 2 && 'Startup Details'}
                {step === 3 && 'Company Details'}
                {step === 4 && 'Project Information'}
              </span>
              {step < 4 && (
                <div className={`w-12 h-1 mx-2 ${currentStep > step ? 'bg-orange-500' : 'bg-slate-200'
                  }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-800">Personal Information</h2>
                </div>

                <p className="text-slate-600 mb-8">
                  Let's start with some basic information about you.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Startup Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-800">Startup Information</h2>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Startup Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your startup name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Describe your startup, its mission, and what problem it solves"
                    required
                  />
                  <p className="text-sm text-slate-500 mt-2">
                    Provide a clear and compelling description of your startup and its value proposition.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Industry *
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none bg-white"
                      required
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Choose the industry that best aligns with your business.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Company Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <DollarSign className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-800">Funding Information</h2>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    How much funding has your company raised to date?
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="1,000,000"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    The sum total of past financing, including angel or venture capital, loans, grants, or token sales.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Is your company incorporated in the United States? *
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('isUSIncorporated', 'yes')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.isUSIncorporated === 'yes'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('isUSIncorporated', 'no')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.isUSIncorporated === 'no'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      No
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Only companies that are incorporated or formed in the US are eligible to raise via Reg CF.
                    If your company is incorporated outside the US, we still encourage you to apply.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Project Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-800">Project Details</h2>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Is your product/service available in the market? *
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('productAvailable', 'yes')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.productAvailable === 'yes'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('productAvailable', 'no')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.productAvailable === 'no'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      No
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Only check this if clients can access, use, or engage with your services today.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Is your company generating revenue? *
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('generatingRevenue', 'yes')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.generatingRevenue === 'yes'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('generatingRevenue', 'no')}
                      className={`px-6 py-3 rounded-lg border font-medium transition-colors ${formData.generatingRevenue === 'no'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                        }`}
                    >
                      No
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Only check this if your company is making money. Please elaborate on revenue and other traction below.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Proposal
                  </label>
                  <div
                    className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('fileInput').click()}
                  >
                    <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">
                      {formData.pitchDeck ? formData.pitchDeck.name : 'Upload your project proposal or pitch deck'}
                    </p>
                    <p className="text-sm text-slate-500">PDF, PPT, or DOC files up to 10MB</p>
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept=".pdf,.ppt,.pptx,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          // Check file size (10MB limit)
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
                    <div className="mt-3 flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-slate-500" />
                        <span className="text-sm text-slate-700">{formData.pitchDeck.name}</span>
                        <span className="text-xs text-slate-500">
                          ({(formData.pitchDeck.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInputChange('pitchDeck', null)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleBack}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${currentStep === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                disabled={currentStep === 1}
              >
                Back
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
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
      <div className="bg-slate-800 text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Nexora</span>
          </div>
          <p className="text-slate-400 mb-4">Building Your Vision with Precision</p>
          <p className="text-sm text-slate-500">
            Questions about the application process? Contact our team at support@nexora.com
          </p>
        </div>
      </div>
    </div>
  );
}
