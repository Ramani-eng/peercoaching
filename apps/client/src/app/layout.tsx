import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeerCoaching - Learn. Teach. Grow Together.",
  description: "AI-powered peer coaching platform for students, colleges, and startups. Learn skills, teach others, and grow together.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PeerCoaching",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C111A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0C111A] text-[#E8ECF4]`}
      >
        {/* Vibrant Ambient Glow Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Top-left teal glow */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#14F5C6] to-[#0EA5E9] opacity-[0.15] rounded-full blur-[100px] animate-pulse" />
          {/* Top-right purple glow */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-[#A855F7] to-[#6366F1] opacity-[0.12] rounded-full blur-[80px]" />
          {/* Center blue accent */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.08] rounded-full blur-[120px]" />
          {/* Bottom-left pink glow */}
          <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-[#EC4899] to-[#8B5CF6] opacity-[0.1] rounded-full blur-[90px]" />
          {/* Bottom-right teal glow */}
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[#14F5C6] to-[#22D3EE] opacity-[0.12] rounded-full blur-[100px]" />
          {/* Floating orbs */}
          <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-[#22D3EE] opacity-[0.1] rounded-full blur-[60px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-[#8B5CF6] opacity-[0.08] rounded-full blur-[70px] animate-[pulse_5s_ease-in-out_infinite]" />
          {/* Grid overlay for depth */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMHY2MEgwVjB6IiBzdHJva2U9InJnYmEoMTQ4LDE2MywxODQsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
