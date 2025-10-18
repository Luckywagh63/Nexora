"use client";
import { Briefcase, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function NexoraFooter() {
  const footerLinks = {
    platform: {
      title: "Platform",
      links: [
        { label: "Investment Opportunities", href: "#opportunities" },
        { label: "Portfolio Management", href: "#portfolio" },
        { label: "Market Research", href: "#research" },
        { label: "Performance Analytics", href: "#analytics" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Investment Guide", href: "#guide" },
        { label: "Market Insights", href: "#insights" },
        { label: "Webinars", href: "#webinars" },
        { label: "Documentation", href: "#docs" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Leadership Team", href: "#team" },
        { label: "Careers", href: "#careers" },
        { label: "Contact Us", href: "#contact" }
      ]
    }
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Legal Disclaimer", href: "#legal" },
    { label: "Compliance", href: "#compliance" }
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <span className="text-2xl font-light text-white tracking-tight">NEXORA</span>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-sm mb-8 max-w-md">
              A premier investment platform connecting institutional and accredited investors with vetted, high-growth opportunities across technology, healthcare, and sustainable industries.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                <a href="mailto:invest@nexora.com" className="text-gray-600 hover:text-amber-500 text-sm font-light transition-colors">
                  invest@nexora.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                <a href="tel:+18005551234" className="text-gray-600 hover:text-amber-500 text-sm font-light transition-colors">
                  +1 (800) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                <span className="text-gray-600 text-sm font-light">
                  New York, NY 10013
                </span>
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.values(footerLinks).map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-light mb-6 tracking-wide text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-white transition-colors text-sm font-light group flex items-center gap-2"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all stroke-[1.5]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-y border-gray-900">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="text-xs tracking-[0.3em] text-amber-500/70 font-light uppercase">Stay Updated</span>
            </div>
            <h3 className="text-3xl font-light text-white mb-4 tracking-tight">
              Subscribe to Investment Insights
            </h3>
            <p className="text-gray-600 font-light text-sm mb-6">
              Receive curated market analysis and exclusive opportunities directly to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 text-white placeholder-gray-600 border border-gray-800 focus:outline-none focus:border-amber-500/50 text-sm font-light tracking-wide transition-all"
              />
              <button className="bg-amber-500 text-black px-8 py-3 font-light text-sm tracking-wide hover:bg-amber-400 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-700 font-light">
            © 2025 Nexora Capital Partners. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-700 font-light">
            {legalLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="hover:text-gray-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}