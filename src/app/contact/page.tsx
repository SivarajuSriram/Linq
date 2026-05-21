"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replicate form submission logic
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <main className="relative min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar />

      {/* Main Content Area */}
      <section className="relative pt-36 pb-24 px-6 md:px-20 min-h-[calc(100vh-100px)] flex flex-col justify-between">
        {/* Diagonal Line Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="#1C1E1D" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Huge Title */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Contact
            </span>
            <h1 className="text-[10vw] lg:text-[6.5vw] font-extrabold tracking-tighter leading-none text-brand-charcoal">
              LET'S WORK
              <br />
              TOGETHER
            </h1>
          </div>

          {/* Right Column: Info & Form */}
          <div className="space-y-12 w-full">
            {/* Info Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm md:text-base font-semibold text-brand-charcoal/80">
              <div className="space-y-2">
                <p className="text-brand-charcoal/40 text-xs uppercase tracking-widest font-bold">
                  Location
                </p>
                <p>Dubai PO Box 111727</p>
              </div>
              <div className="space-y-2">
                <p className="text-brand-charcoal/40 text-xs uppercase tracking-widest font-bold">
                  Get in Touch
                </p>
                <p>
                  <a
                    href="tel:+9714238100"
                    className="hover:text-brand-green transition-colors underline underline-offset-4"
                  >
                    +971 423 8100
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@kingshaus.co"
                    className="hover:text-brand-green transition-colors underline underline-offset-4"
                  >
                    info@kingshaus.co
                  </a>
                </p>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="bg-brand-green text-white p-8 rounded-[24px] border border-brand-green/20 shadow-lg animate-fadeIn">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  Thank you for reaching out. A Kingshaus representative will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group border-b border-brand-border/80 focus-within:border-brand-green transition-colors py-2">
                    <label className="text-xs uppercase tracking-wider text-brand-charcoal/40 font-bold block mb-1">
                      First name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-brand-charcoal font-semibold text-sm py-1 placeholder-transparent focus:ring-0"
                    />
                  </div>

                  <div className="relative group border-b border-brand-border/80 focus-within:border-brand-green transition-colors py-2">
                    <label className="text-xs uppercase tracking-wider text-brand-charcoal/40 font-bold block mb-1">
                      Last name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-brand-charcoal font-semibold text-sm py-1 placeholder-transparent focus:ring-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group border-b border-brand-border/80 focus-within:border-brand-green transition-colors py-2">
                    <label className="text-xs uppercase tracking-wider text-brand-charcoal/40 font-bold block mb-1">
                      Business email*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-brand-charcoal font-semibold text-sm py-1 placeholder-transparent focus:ring-0"
                    />
                  </div>

                  <div className="relative group border-b border-brand-border/80 focus-within:border-brand-green transition-colors py-2">
                    <label className="text-xs uppercase tracking-wider text-brand-charcoal/40 font-bold block mb-1">
                      Company*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-brand-charcoal font-semibold text-sm py-1 placeholder-transparent focus:ring-0"
                    />
                  </div>
                </div>

                <div className="relative group border-b border-brand-border/80 focus-within:border-brand-green transition-colors py-2">
                  <label className="text-xs uppercase tracking-wider text-brand-charcoal/40 font-bold block mb-1">
                    Message/enquiry
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-none outline-none text-brand-charcoal font-semibold text-sm py-1 placeholder-transparent resize-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                  <p className="text-xs text-brand-charcoal/50 font-medium max-w-xs">
                    By submitting this form, you agree to our Cookies & Privacy Policy.
                  </p>
                  <button
                    type="submit"
                    className="btn-green self-end sm:self-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
