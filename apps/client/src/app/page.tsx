import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14F5C6] to-[#6366F1] flex items-center justify-center shadow-[0_0_20px_rgba(20,245,198,0.3)]">
            <span className="text-[#0C111A] font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-[#E8ECF4]">PeerCoaching</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-[#94A3B8] hover:text-[#E8ECF4] font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="px-5 py-2.5 bg-gradient-to-r from-[#14F5C6] via-[#22D3EE] to-[#6366F1] text-[#0C111A] rounded-xl font-semibold shadow-[0_0_20px_rgba(20,245,198,0.3)] hover:shadow-[0_0_30px_rgba(20,245,198,0.5)] transition-all"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center px-6 pt-16 pb-24 text-center max-w-4xl mx-auto">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(20,245,198,0.1)] border border-[rgba(20,245,198,0.2)] rounded-full mb-8 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-[#14F5C6] shadow-[0_0_8px_rgba(20,245,198,0.8)] animate-pulse" />
          <span className="text-sm font-medium text-[#14F5C6]">Trusted by 10,000+ students</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8ECF4] mb-6 leading-tight">
          Learn skills. Teach peers.
          <br />
          <span className="bg-gradient-to-r from-[#14F5C6] via-[#22D3EE] to-[#6366F1] bg-clip-text text-transparent">
            Grow together.
          </span>
        </h1>

        <p className="text-lg text-[#94A3B8] max-w-2xl mb-10 leading-relaxed">
          The student-focused platform where you learn by doing, earn by teaching, 
          and unlock real opportunities from colleges and startups.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/login"
            className="px-8 py-4 bg-gradient-to-r from-[#14F5C6] via-[#22D3EE] to-[#6366F1] text-[#0C111A] rounded-2xl font-semibold text-lg shadow-[0_0_30px_rgba(20,245,198,0.3)] hover:shadow-[0_0_40px_rgba(20,245,198,0.5)] hover:scale-[1.02] transition-all"
          >
            Start Your Journey
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 bg-[rgba(15,23,42,0.6)] backdrop-blur-xl text-[#E8ECF4] rounded-2xl font-semibold text-lg border border-[rgba(99,179,237,0.15)] hover:border-[rgba(20,245,198,0.4)] hover:bg-[rgba(20,245,198,0.05)] transition-all"
          >
            See How It Works
          </Link>
        </div>

        {/* Journey Illustration */}
        <div className="w-full max-w-2xl bg-[rgba(15,23,42,0.6)] backdrop-blur-xl rounded-2xl border border-[rgba(99,179,237,0.1)] p-8">
          <p className="text-sm font-medium text-[#94A3B8] mb-6">Your path to success</p>
          <div className="flex items-center justify-between relative">
            {/* Connection lines with glow */}
            <div className="absolute left-[12%] right-[12%] top-8 h-0.5 bg-gradient-to-r from-[#14F5C6] via-[#22D3EE] to-[#6366F1] opacity-30" />
            
            {[
              { icon: '📚', label: 'Learn Skills', color: 'from-[#14F5C6]/20 to-[#14F5C6]/5' },
              { icon: '🎓', label: 'Teach Peers', color: 'from-[#22D3EE]/20 to-[#22D3EE]/5' },
              { icon: '🚀', label: 'Earn Points', color: 'from-[#6366F1]/20 to-[#6366F1]/5' },
              { icon: '🏆', label: 'Get Rewards', color: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5' },
            ].map((step) => (
              <div key={step.label} className="flex flex-col items-center relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl border border-[rgba(255,255,255,0.05)] shadow-lg mb-3`}>
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-[#94A3B8]">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Role Cards */}
      <section className="px-6 py-16 border-t border-[rgba(99,179,237,0.1)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E8ECF4] text-center mb-4">
            Built for everyone in the ecosystem
          </h2>
          <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
            Whether you're learning, teaching, hiring, or managing—we've got you covered.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Students', 
                desc: 'Learn skills, teach peers, earn rewards', 
                icon: '🎓', 
                gradient: 'from-[#14F5C6] to-[#22D3EE]',
                glow: 'shadow-[0_0_30px_rgba(20,245,198,0.2)]'
              },
              { 
                title: 'Colleges', 
                desc: 'Verify students, track progress', 
                icon: '🏛️', 
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                glow: 'shadow-[0_0_30px_rgba(99,102,241,0.2)]'
              },
              { 
                title: 'Startups', 
                desc: 'Post projects, hire proven talent', 
                icon: '🚀', 
                gradient: 'from-[#8B5CF6] to-[#A855F7]',
                glow: 'shadow-[0_0_30px_rgba(139,92,246,0.2)]'
              },
              { 
                title: 'Sponsors', 
                desc: 'Fund rewards, support growth', 
                icon: '💎', 
                gradient: 'from-[#F59E0B] to-[#F43F5E]',
                glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]'
              },
            ].map((role) => (
              <div
                key={role.title}
                className={`p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-[rgba(99,179,237,0.1)] hover:border-[rgba(20,245,198,0.3)] transition-all cursor-pointer group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-2xl mb-4 ${role.glow} group-hover:scale-110 transition-transform`}>
                  {role.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#E8ECF4] mb-1">{role.title}</h3>
                <p className="text-sm text-[#64748B]">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16 border-t border-[rgba(99,179,237,0.1)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E8ECF4] mb-12">
            Built with trust, simplicity, and clarity
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: '🔒', title: 'Secure & Private', desc: 'Your data is protected. We never share or sell.' },
              { icon: '✅', title: 'Verified by Design', desc: 'Every skill and achievement is proof-backed.' },
              { icon: '⚖️', title: 'Fair for Everyone', desc: 'No shortcuts. Merit-based rewards only.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-[rgba(99,179,237,0.1)] flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#E8ECF4] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#14F5C6]/10 via-[#6366F1]/10 to-[#8B5CF6]/10 backdrop-blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8ECF4] mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            Join thousands of students already learning, teaching, and growing.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#14F5C6] via-[#22D3EE] to-[#6366F1] text-[#0C111A] rounded-2xl font-semibold text-lg shadow-[0_0_30px_rgba(20,245,198,0.4)] hover:shadow-[0_0_50px_rgba(20,245,198,0.6)] hover:scale-[1.02] transition-all"
          >
            Get Started — It's Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[rgba(99,179,237,0.1)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14F5C6] to-[#6366F1] flex items-center justify-center">
              <span className="text-[#0C111A] font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-[#E8ECF4]">PeerCoaching</span>
          </div>
          <p className="text-sm text-[#64748B]">
            © 2026 PeerCoaching. Built for students, by students.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#64748B] hover:text-[#14F5C6] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#64748B] hover:text-[#14F5C6] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-[#64748B] hover:text-[#14F5C6] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
