"use client";
import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      <div className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Contact</span>
            </div>
            <h1 className="text-7xl font-light text-white mb-6 tracking-tight leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Ready to explore investment opportunities? Connect with our team to discuss your portfolio strategy.
            </p>
          </div>

          {/* Main Form Container */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="border border-gray-900 p-12">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-8 h-8 text-amber-500 stroke-[1.5]" />
                  </div>
                  <h3 className="text-3xl font-light text-white mb-4 tracking-tight">Message Sent</h3>
                  <p className="text-gray-600 font-light">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-light text-white mb-2 tracking-tight">Start a Conversation</h2>
                    <p className="text-gray-600 font-light text-sm">Fill out the form below and we'll be in touch.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs text-gray-600 mb-3 font-light tracking-wider uppercase">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 transition-all font-light text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs text-gray-600 mb-3 font-light tracking-wider uppercase">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 transition-all font-light text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs text-gray-600 mb-3 font-light tracking-wider uppercase">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 transition-all font-light text-sm"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-xs text-gray-600 mb-3 font-light tracking-wider uppercase">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="6"
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 transition-all resize-none font-light text-sm"
                        placeholder="Tell us about your investment interests..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="group w-full bg-amber-500 text-black py-4 font-light text-sm tracking-wide hover:bg-amber-400 transition-all flex items-center justify-center gap-3"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="border border-gray-900 p-8">
                <h3 className="text-2xl font-light text-white mb-8 tracking-tight">Contact Information</h3>
                
                <div className="space-y-8">
              

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <div className="font-light text-white mb-1 text-sm">Email Us</div>
                      <div className="text-gray-600 font-light text-sm">nexoraavl@gmail.com</div>
                      <div className="text-xs text-gray-700 font-light mt-1">We respond within 24hrs</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-500/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <div className="font-light text-white mb-1 text-sm">Visit Us</div>
                      <div className="text-gray-600 font-light text-sm">Navi Mumbai</div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="border border-gray-900 p-8 bg-gray-900/30">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-900">
                    <div className="text-5xl font-light text-white mb-2 tracking-tight">50</div>
                    <div className="text-gray-600 font-light text-sm">Active Investors</div>
                  </div>
                  <div className="pb-6 border-b border-gray-900">
                    <div className="text-5xl font-light text-white mb-2 tracking-tight">Rs.40K</div>
                    <div className="text-gray-600 font-light text-sm">Assets Under Management</div>
                  </div>
                  <div>
                    <div className="text-5xl font-light text-white mb-2 tracking-tight">94%</div>
                    <div className="text-gray-600 font-light text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
