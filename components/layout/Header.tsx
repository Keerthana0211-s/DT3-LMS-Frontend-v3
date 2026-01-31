"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname.startsWith("/auth");

  return (
    <header className="bg-white border-b border-teal-100 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DigitalT3"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {!isAuthPage && (
          <Link
            href="/dashboard/learner/settings"
            className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition"
            aria-label="Settings"
          >
            <User size={22} strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </header>
  );
}
