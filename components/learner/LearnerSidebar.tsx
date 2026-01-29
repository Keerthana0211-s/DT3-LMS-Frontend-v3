"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Dashboard", href: "/dashboard/learner" },
  { label: "My Courses", href: "/dashboard/learner/courses" },
  { label: "Progress", href: "/dashboard/learner/progress" },
  { label: "Assignments", href: "/dashboard/learner/assignments" },
  { label: "Certificates", href: "/dashboard/learner/certificates" },
  { label: "Settings", href: "/dashboard/learner/settings" },
];

export default function LearnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4 hidden md:block">
      <h2 className="text-xl font-semibold mb-6">Learner</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-2 transition ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
