"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/ui/mobile-nav";
import { scrollToElement } from "@/lib/utils";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToElement(id);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToElement("contact");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Cursor</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild onClick={handleButtonClick}>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <MobileNav onNavigate={handleClick} />
          </div>
        </div>
      </Container>
    </header>
  );
}
