import React from "react";
import { FaEnvelope, FaPhone, FaGlobe, FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white w-screen px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaCheckCircle /> Voice-to-voice interaction</li>
            <li className="flex items-center gap-2"><FaCheckCircle /> Multilingual Conversations</li>
            <li className="flex items-center gap-2"><FaCheckCircle /> Personalised Experience</li>
            <li className="flex items-center gap-2"><FaCheckCircle /> Built-in Support</li>
            <li className="flex items-center gap-2"><FaCheckCircle /> Real-time DEMOs & Tours</li>
            <li className="flex items-center gap-2"><FaCheckCircle /> AI-powered Insights</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#demo" className="hover:underline">Book a Demo</a></li>
          </ul>
        </div>

        {/* Backed By */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Backed By</h4>
          <p className="text-sm">Openzo Softcorp Pvt Ltd</p>
          <div className="flex items-center gap-2 mt-2">
            <FaGlobe />
            <a href="https://www.insurge.site" target="_blank" rel="noreferrer" className="hover:underline">
              www.insurge.site
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope /> rohithvegesna.online@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhone /> +91 82477 62289
          </div>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope /> tanush.agarwal.iitkgp@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaPhone /> +91 83093 00581
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-violet-500 mt-8 pt-4 text-center text-xs text-violet-200">
        Made with ❤️ | By Priyanshu Mishra
      </div>
    </footer>
  );
};

export default Footer;
