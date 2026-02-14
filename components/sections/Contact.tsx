"use client";

import React, { useState } from "react";
import {
  Envelope,
  MapPin,
  PhoneCall,
  PaperPlaneTilt,
  Globe
} from "phosphor-react";
import { motion } from "framer-motion";

import GridPattern from '../ui/GridPattern';

const ContactSection = () => {
  const [userType, setUserType] = useState<"client" | "candidate">("client");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("idle");
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic validation
    const newErrors: { [key: string]: string } = {};
    if (!name || name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid email required";
    if (!message || message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus("error");
      return;
    }

    try {
      setFormStatus("idle"); // or "submitting" if you add that state
      // Use Web3Forms for no-backend email submission
      // Replace ACCESS_KEY with your actual access key from web3forms.com
      formData.append("access_key", "5374e5fa-7437-4159-b648-51b482d71e69");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setErrors({});
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        console.error("Submission failed", result);
        setFormStatus("error");
        setErrors({ form: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Submission error", error);
      setFormStatus("error");
      setErrors({ form: "Network error. Please try again later." });
    }

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus("idle");
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col justify-center bg-zinc-50/30 scroll-mt-24"
    >
      <GridPattern opacity={0.3} />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-900 text-[11px] font-mono font-black uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-sm">
              <Globe size={18} weight="bold" className="text-slate-400" />
              Get in Touch
            </div>

            <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8 md:mb-12">
              Talk
              <span className="text-[#044396]g bg-gradient-to-r from-[#044396] to-[#044396] bg-clip-text text-transparent">Talent.</span>
            </h3>

            <div className="space-y-8 md:space-y-12">
              {[
                { icon: MapPin, title: "Headquarters", info: "Ahmedabad-380014" },
                { icon: Envelope, title: "Email Us", info: "hr@talentmeshsolutions.com" },
                { icon: PhoneCall, title: "Call Us", info: "+91 9898161106" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-8 group">
                  <div className="p-6 bg-slate-50 rounded-3xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 border border-slate-100">
                    <item.icon size={32} weight="duotone" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    {item.title === "Email Us" ? (
                      <a
                        href={`mailto:${item.info}`}
                        className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-[#044396] transition-colors duration-500 cursor-pointer"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-slate-600 transition-colors duration-500">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Modern Compact Form (Squared) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-8 md:p-12 border border-zinc-200 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden w-full lg:max-w-2xl mx-auto lg:mx-0"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100 blur-[120px] rounded-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 md:space-y-8">
              <div className="bg-zinc-50 p-1 md:p-1.5 flex flex-col sm:flex-row border border-zinc-200">
                {["client", "candidate"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type as any)}
                    className={`flex-1 py-3 text-[10px] font-mono font-black uppercase tracking-[0.2em] transition-all duration-300 ${userType === type
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    {type === "client" ? "Employers" : "Candidates"}
                  </button>
                ))}
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className={`group border-b-2 ${errors.name ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Name</p>
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-transparent pb-3 text-lg font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Full Name / Company"
                    required
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-2">{errors.name}</p>}
                </div>
                <div className={`group border-b-2 ${errors.email ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Email</p>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-transparent pb-3 text-lg font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Email Address"
                    required
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-2">{errors.email}</p>}
                </div>
                <div className={`group border-b-2 ${errors.message ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Message</p>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-transparent pb-3 text-lg font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight resize-none"
                    placeholder="How can we help?"
                    required
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-2">{errors.message}</p>}
                </div>
              </div>


              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 p-4 mb-4">
                  <p className="text-green-700 font-medium text-xs text-center">✓ Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={formStatus === "success"}
                className="w-full bg-[#044396] text-white font-bold font-mono py-5 rounded-none shadow-[0_10px_40px_rgba(4,67,150,0.3)] hover:shadow-[0_20px_40px_rgba(4,67,150,0.2)] flex items-center justify-center gap-4 uppercase tracking-[0.3em] transition-all text-xs disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {formStatus === "success" ? "Message Sent!" : "Send Message"}
                <PaperPlaneTilt size={18} weight="bold" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;