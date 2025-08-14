import { FaEnvelope, FaPhone, FaGlobe, FaCheckCircle } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-violet-800 to-purple-800 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-200">Key Features</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> Voice-to-voice interaction
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> Multilingual Conversations
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> Personalised Experience
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> Built-in Support
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> Real-time DEMOs & Tours
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-violet-300" /> AI-powered Insights
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-200">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-violet-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-violet-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#demo" className="hover:text-violet-300 transition">
                Book a Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-200">Company</h4>
          <p className="text-sm mb-3">Openzo Softcorp Pvt Ltd</p>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-violet-300" />
            <a
              href="https://www.insurge.site"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-300 transition text-sm"
            >
              www.insurge.site
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-200">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-violet-300" />
              <span>rohithvegesna.online@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-violet-300" />
              <span>+91 82477 62289</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-violet-300" />
              <span>tanush.agarwal.iitkgp@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-violet-300" />
              <span>+91 83093 00581</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-violet-600 mt-10 pt-6 text-center text-sm text-violet-200">
        Made with ❤️ by Priyanshu Mishra | © 2024 Insurge AI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
