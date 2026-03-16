"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteNavProps = {
  items: NavigationItem[];
};

export function SiteNav({ items }: SiteNavProps) {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
