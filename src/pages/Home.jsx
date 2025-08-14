import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from "../assets/image.png";
import { RiRobot2Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { FiMic } from "react-icons/fi";
import { Link } from "react-router-dom";

function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("");
  }, [chatOpen]);

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="body w-screen min-h-[calc(100vh-60px)] bg-white flex flex-col items-center">
        <section className="hero flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 max-w-7xl w-full pt-16 lg:pt-4 h-full">
          {/* Left Text */}
          <div className="flex flex-col text-center lg:text-left lg:w-1/2 pb-10">
            <h1 className="text-violet-700 text-5xl font-bold leading-tight">
              Personalised AI Sales Agents for Instant Demos & Conversions
            </h1>
            <p className="text-violet-500 text-lg mt-4">
              We deliver real-time, customised product demos paired with
              conversational AI — turning your website visitors into qualified
              leads, instantly and at scale.
            </p>
            <div className="btns flex gap-4">
              <button className="mt-6 bg-gradient-to-r from-[#994ECC] to-[#3E187A] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 w-1/2">
                Book a Free Demo
              </button>
              <button className="mt-6 bg-gradient-to-r from-[#994ECC] to-[#3E187A] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 w-1/2">
                <Link to="/dashboard">Check out Dashboard</Link>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full lg:w-1/2 flex justify-center items-center">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
            )}
            <img
              src={Img}
              alt="AI Illustration"
              className={`transition-opacity duration-500 object-contain max-h-[calc(100vh-100px)] w-full h-auto ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </section>
        {/* Features */}
        <section className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 px-6 max-w-7xl">
          {[
            "Voice-to-voice interaction",
            "Multilingual Conversations",
            "Personalised & Customised User Experience",
            "Built-in Customer Support",
            "Delivers Real-time DEMOs, Calls & Tours",
            "Features Leveraging AI",
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-violet-50 border border-violet-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-violet-700 font-semibold text-lg">
                {feature}
              </h3>
            </div>
          ))}
        </section>
        {/* About Section */}{" "}
        <section className="about mt-20 px-6 max-w-5xl text-center sm:text-left space-y-4 pb-20">
          {" "}
          <h2 className="text-3xl font-bold text-violet-700">
            {" "}
            How Insurge AI Works{" "}
          </h2>{" "}
          <p className="text-gray-600 leading-relaxed">
            {" "}
            Insurge AI builds autonomous sales agents that deliver personalised
            product demos paired with conversational AI. These agents can be
            accessed directly on a company’s website or through a dedicated,
            shareable link. When a user engages, the agent begins by
            understanding their specific requirements through an interactive
            conversation.{" "}
          </p>{" "}
          <p className="text-gray-600 leading-relaxed">
            {" "}
            Based on the user’s stated needs such as use case, industry, or
            product interest, the agent dynamically assembles a custom visual
            demo from a structured library of product slides, videos, and other
            media. The conversational AI guides the session, providing
            explanations, answering questions, and adjusting the demo sequence
            in real-time so visuals always match the topic being discussed.{" "}
          </p>{" "}
          <p className="text-gray-600 leading-relaxed">
            {" "}
            This integration of voice, text, and visuals ensures that users
            receive a focused, relevant presentation every time. Whether
            accessed on the website or via a special link, the agent delivers a
            fully interactive and personalised experience that replicates the
            clarity and engagement of a live, human-led product walkthrough —
            instantly and at scale.{" "}
          </p>{" "}
        </section>{" "}
      </div>{" "}
      <div>
        {" "}
        <button className="fixed bottom-10 right-12 h-20 w-20 rounded-full bg-violet-700 flex items-center justify-center">
          {" "}
          <RiRobot2Line className="h-12 w-12 cursor-pointer text-white hover:scale-110 transition" />{" "}
        </button>
      </div>
      {/* Floating Chat Button */}
      <div>
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-10 right-12 h-20 w-20 rounded-full bg-violet-700 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <RiRobot2Line className="h-12 w-12 text-white cursor-pointer" />
        </button>
      </div>
      {/* Chat Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg border-l border-gray-200 transform transition-transform duration-300 flex flex-col ${
          chatOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-violet-700 text-white h-[60px]">
          <h3 className="font-semibold">AI Chat Assistant</h3>
          <button
            onClick={() => setChatOpen(false)}
            className="text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Chat Input */}
        <div className="mt-auto p-4 border-t border-gray-200 flex gap-2 items-end">
          <button className="bg-violet-700 h-10 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition">
            <FiMic className="h-5 w-5" />
          </button>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello! 👋 How can I assist you today?"
            rows={2}
            wrap="soft"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none overflow-hidden overflow-y-auto"
          />
          <button className="bg-violet-700 h-10 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition">
            <FiSend className="h-5 w-5" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
