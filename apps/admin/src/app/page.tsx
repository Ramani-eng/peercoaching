import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#12121a] border-r border-[#1f1f2a] flex flex-col">
        <div className="p-6 border-b border-[#1f1f2a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-white">Admin</span>
              <p className="text-xs text-slate-500">PeerCoaching</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { name: "Dashboard", icon: "📊", href: "/", active: true },
            { name: "Users", icon: "👥", href: "/users", active: false },
            { name: "Colleges", icon: "🏛️", href: "/colleges", active: false },
            { name: "Startups", icon: "🚀", href: "/startups", active: false },
            { name: "Sessions", icon: "💬", href: "/sessions", active: false },
            { name: "Analytics", icon: "📈", href: "/analytics", active: false },
            { name: "Compliance", icon: "🛡️", href: "/compliance", active: false },
            { name: "Settings", icon: "⚙️", href: "/settings", active: false },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-white"
                  : "text-slate-400 hover:bg-[#1a1a25] hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#1f1f2a]">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-[#1a1a25] hover:text-white transition-all">
            <span className="text-lg">🚪</span>
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1f1f2a] px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-sm text-slate-500">Platform overview and management</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-xl bg-[#12121a] border border-[#1f1f2a] text-slate-400 hover:text-white hover:border-[#2a2a3a] transition-all">
                🔔
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Users", value: "0", change: "+0%", icon: "👥", color: "from-indigo-500 to-blue-500" },
              { label: "Active Sessions", value: "0", change: "+0%", icon: "💬", color: "from-purple-500 to-pink-500" },
              { label: "Verified Colleges", value: "0", change: "+0%", icon: "🏛️", color: "from-cyan-500 to-teal-500" },
              { label: "Partner Startups", value: "0", change: "+0%", icon: "🚀", color: "from-amber-500 to-orange-500" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-[#12121a] border border-[#1f1f2a] rounded-2xl hover:border-[#2a2a3a] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Welcome Card */}
          <div className="p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome to PeerCoaching Admin</h2>
            <p className="text-slate-400 mb-6">
              This is your command center for managing the PeerCoaching platform. 
              Connect your Firebase backend to see live data.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all">
                View Documentation
              </button>
              <button className="px-6 py-3 bg-[#12121a] border border-[#1f1f2a] text-white rounded-xl font-medium hover:bg-[#1a1a25] hover:border-[#2a2a3a] transition-all">
                Configure Firebase
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
