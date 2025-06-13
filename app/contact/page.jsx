"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 border border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-amber-500/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-amber-300/40 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-stone-600/20 rounded-full"></div>
      </div>

      <div className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mb-4 tracking-tight">
                GET IN TOUCH
              </h1>
              <div className="h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-2xl text-stone-300 mt-8 max-w-2xl mx-auto leading-relaxed">
              Ready to discover the next unicorn? Let's connect and explore investment opportunities together.
            </p>
          </div>

          {/* Main Form Container */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-3xl shadow-2xl overflow-hidden border border-amber-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Form */}
              <div className="p-12">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                      <span className="text-white text-4xl">✓</span>
                    </div>
                    <h3 className="text-3xl font-black text-stone-800 mb-4">MESSAGE SENT!</h3>
                    <p className="text-xl text-stone-600">Our team will reach out within 24 hours.</p>
                    <div className="mt-8">
                      <div className="inline-flex items-center text-amber-600 font-bold">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-2 animate-ping"></div>
                        Processing your request...
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-black text-stone-800 mb-2">START YOUR JOURNEY</h2>
                      <p className="text-stone-600">Fill out the form and we'll be in touch soon.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="group">
                          <label className="block text-sm font-black text-stone-700 mb-3 tracking-widest">FULL NAME</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              className="w-full px-6 py-4 bg-white border-2 border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md font-medium text-black"
                              placeholder="John Doe"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>
                        <div className="group">
                          <label className="block text-sm font-black text-stone-700 mb-3 tracking-widest">EMAIL</label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              className="w-full px-6 py-4 bg-white border-2 border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 shadow-sm group-hover:shadow-md font-medium text-black"
                              placeholder="john@company.com"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-black text-stone-700 mb-3 tracking-widest">COMPANY</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-6 py-4 bg-white border-2 border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-black duration-300 shadow-sm group-hover:shadow-md font-medium"
                            placeholder="Your Company Name"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-black text-stone-700 mb-3 tracking-widest">MESSAGE</label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            className="w-full px-6 py-4 bg-white border-2 border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-black duration-300 shadow-sm group-hover:shadow-md resize-none font-medium"
                            placeholder="Tell us about your investment interests, funding goals, or any questions you have..."
                          ></textarea>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-8 font-black text-lg rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide"
                      >
                        SEND MESSAGE →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Info */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-8">CONNECT WITH NEXORA</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <div className="font-black text-lg mb-1">CALL US</div>
                        <div className="text-amber-100">+1 (555) 123-4567</div>
                        <div className="text-sm text-amber-200">Mon-Fri, 9AM-6PM EST</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <div className="font-black text-lg mb-1">EMAIL US</div>
                        <div className="text-amber-100">invest@nexora.com</div>
                        <div className="text-sm text-amber-200">We respond within 24hrs</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <div className="font-black text-lg mb-1">VISIT US</div>
                        <div className="text-amber-100">123 Venture Street</div>
                        <div className="text-sm text-amber-200">San Francisco, CA 94105</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-4xl font-black mb-2">500+</div>
                    <div className="text-amber-100">Active Investors</div>
                    <div className="text-sm text-amber-200 mt-2">Join our growing community</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-white/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          
        </div>
      </div>
    </div>
  );
}