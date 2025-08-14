import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
  FaChartLine,
  FaUsers,
  FaCogs,
  FaRobot,
  FaPlus,
  FaCalendarAlt,
  FaBolt,
  FaDatabase,
  FaComments,
} from "react-icons/fa"

const Dashboard = () => {
  const creditUsageStats = [
    { title: "AI Usage", value: "72,000", limit: "100,000", icon: <FaRobot size={24} /> },
    { title: "STT Usage", value: "350 min", limit: null, icon: <FaUsers size={24} /> },
    { title: "TTS Usage", value: "480,000", limit: "1,000,000", icon: <FaChartLine size={24} /> },
  ]

  const conversations = [
    { id: 1234, agent: "Real Estate Agent", dateTime: "09 Aug 2025 14:23", messages: "View Transcript" },
    { id: 5678, agent: "SaaS Demo Agent", dateTime: "09 Aug 2025 11:05", messages: "View Transcript" },
  ]

  const analyticsData = [
    { title: "Total Conversations", value: "2,145" },
    { title: "Slides Shown", value: "4,120" },
  ]

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 px-2 lg:px-6 py-4 gap-4 min-h-[calc(100vh-60px)]">
        {/* Sidebar */}
        <div className="sidebar w-64 bg-violet-600 text-white rounded-xl shadow-lg flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-6">Insurge AI</h2>
          <nav className="flex flex-col gap-3">
            <button className="flex items-center gap-2 p-2 rounded-lg bg-violet-800">
              <FaComments /> Conversations
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-violet-500 transition">
              <FaChartLine /> Credit Usage
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-violet-500 transition">
              <FaChartLine /> Analytics
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-violet-500 transition">
              <FaCogs /> Tool Connections
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-violet-500 transition">
              <FaDatabase /> Knowledge Base
            </button>
          </nav>
          <div className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 transition text-white px-3 py-2 rounded-lg mt-4">
              <FaPlus /> New Demo
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Conversations</h2>
              <select className="border rounded px-3 py-1 text-sm">
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 font-medium">User ID</th>
                    <th className="text-left p-3 font-medium">Agent</th>
                    <th className="text-left p-3 font-medium">Date / Time</th>
                    <th className="text-left p-3 font-medium">Messages</th>
                  </tr>
                </thead>
                <tbody>
                  {conversations.map((conv) => (
                    <tr key={conv.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{conv.id}</td>
                      <td className="p-3">{conv.agent}</td>
                      <td className="p-3">{conv.dateTime}</td>
                      <td className="p-3">
                        <button className="text-blue-500 hover:text-blue-700">{conv.messages}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Credit Usage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {creditUsageStats.map((stat, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-violet-600">{stat.icon}</div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {stat.value}
                    {stat.limit && <span className="text-lg text-gray-500"> / {stat.limit}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticsData.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">{item.title}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg p-4 flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600">
              <FaBolt /> Launch Demo
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <FaCalendarAlt /> View Schedule
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
