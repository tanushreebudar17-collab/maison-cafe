
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Our Menu", href: "#menu" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  const contactDetails = [
    {
      icon: MapPin,
      text: "Your Café Address, Mumbai, Maharashtra",
    },
    {
      icon: Phone,
      text: "+91 98765 43210",
    },
    {
      icon: Mail,
      text: "hello@maisoncafe.com",
    },
  ];

  const openingHours = [
    { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
    { day: "Saturday", time: "9:00 AM – 11:00 PM" },
    { day: "Sunday", time: "9:00 AM – 9:00 PM" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#2D1B14] text-[#F8F4EE]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C8A96A]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C8A96A]/10" />

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/50">
                <Coffee size={23} className="text-[#C8A96A]" />
              </div>

              <div>
                <h2 className="font-serif text-2xl tracking-wide">
                  Maison Café
                </h2>
                <p className="mt-0.5 text-[9px] uppercase tracking-[0.35em] text-[#C8A96A]">
                  Coffee · Comfort · Connection
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#F8F4EE]/60">
              A little corner of comfort, where beautiful coffee, fresh
              flavours and meaningful moments come together.
            </p>

            <a
              href="#menu"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#C8A96A] pb-2 text-sm text-[#C8A96A] transition hover:gap-5"
            >
              Explore our menu
              <ArrowUpRight size={16} />
            </a>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#2D1B14]"
              >
                <span className="font-semibold">ig</span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold transition hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#2D1B14]"
              >
                f
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Explore</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#F8F4EE]/60 transition hover:text-[#C8A96A]"
                  >
                    <span className="h-px w-0 bg-[#C8A96A] transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Get in Touch</h3>

            <ul className="space-y-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={index} className="flex items-start gap-4">
                    <Icon
                      size={18}
                      className="mt-1 shrink-0 text-[#C8A96A]"
                    />
                    <span className="break-words text-sm leading-6 text-[#F8F4EE]/60">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Opening Hours</h3>

            <div className="mb-5 flex items-center gap-3 text-[#C8A96A]">
              <Clock size={18} />
              <span className="text-xs uppercase tracking-[0.2em]">
                Come visit us
              </span>
            </div>

            <div className="space-y-5">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-1 border-b border-white/10 pb-4"
                >
                  <span className="text-sm text-[#F8F4EE]/80">
                    {item.day}
                  </span>
                  <span className="text-xs text-[#F8F4EE]/45">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#reservation"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2D1B14] transition hover:bg-[#E0C58F]"
            >
              Reserve a table
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-[#F8F4EE]/45">
            © {currentYear} Maison Café. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-[#F8F4EE]/40">
            Made with love, served with coffee.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96A]/40 text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-[#2D1B14]"
          >
            <ArrowUp size={17} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
