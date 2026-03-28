"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "HM" },
  { href: "/pick", label: "Pick", icon: "PK" },
  { href: "/history", label: "History", icon: "HS" },
  { href: "/about", label: "About", icon: "AB" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-shell" aria-label="Primary navigation">
      <div className="nav-grid">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} className={`nav-link${active ? " active" : ""}`}>
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
