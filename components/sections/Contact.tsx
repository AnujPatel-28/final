"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

const ContactSection: React.FC = () => {
  const [userType, setUserType] = useState<"client" | "candidate">("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., connect to EmailJS or API)
    alert(`Form submitted as ${userType}!`);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Contact Info & Value Prop */}
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Get in Touch
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Build Your <br />
              <span className="text-blue-600">Dream Team</span> Today.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you are a startup looking to scale or a professional seeking your next challenge, TalentMesh is here to bridge the gap.
            </p>

            <div className="space-y-8">
              {/* Contact Details */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">123 Business Park, Sector 5<br />Tech City, State, 500081</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@talentmesh.com</p>
                  <p className="text-gray-500 text-sm">recruitment@talentmesh.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 987 654 3210</p>
                  <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
            </div>

            {/* Social Proof / Trust */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-4">Connect with us</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">

            {/* Toggle Switch */}
            <div className="bg-gray-100 p-1 rounded-lg flex mb-8">
              <button
                onClick={() => setUserType("client")}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${userType === "client"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                I'm Hiring Talent
              </button>
              <button
                onClick={() => setUserType("candidate")}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${userType === "candidate"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                I'm Looking for a Job
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                  required
                />
              </div>

              {/* Dynamic Field based on Toggle */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                  {userType === "client" ? "Company Name" : "Current Job Title"}
                </label>
                <input
                  type="text"
                  id="details"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={userType === "client" ? "Tech Corp Inc." : "Senior Developer"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={
                    userType === "client"
                      ? "We are looking for a Senior React Developer..."
                      : "I am interested in remote opportunities in..."
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                By sending this form, you agree to our Terms & Privacy Policy.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;