"use client";
import Link from "next/link";

export default function FounderWhatsApp() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full flex flex-col items-center py-16">
        <h1 className="text-3xl font-bold text-[#41E5FF] mb-4 text-center">Join Our Startup Founder WhatsApp Channel</h1>
        <p className="text-gray-700 text-center mb-8 text-lg">
          Connect with other founders, get support, and accelerate your startup journey!
        </p>
        <Link href="https://chat.whatsapp.com/DiCkLNcqbEA16jTKEjKQxx" passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg transition-colors text-center"
          >
            Join WhatsApp Channel
          </a>
        </Link>
      </div>
    </main>
  );
} 