
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-5 md:px-12 pt-5">

      <div className="max-w-[1450px] mx-auto
        bg-[#FFFDF8]/90 backdrop-blur-xl
        border border-white/70 shadow-xl
        rounded-full px-6 md:px-9 py-4
        flex items-center justify-between">

        {/* Logo */}
        <a href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3">

          <div className="bg-[#3B241A] p-2.5 rounded-full">
            <Coffee size={21} className="text-[#D8B779]" />
          </div>

          <div>
            <h2 className="font-serif text-xl
              tracking-wide text-[#3B241A]">
              Maison Café
            </h2>
            <p className="text-[8px] tracking-[3px]
              text-[#A17C42]">
              COFFEE · COMFORT · CONNECTION
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-7">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#725849]
                hover:text-[#C8A96A] transition
                relative group"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0
                w-0 h-[2px] bg-[#C8A96A]
                group-hover:w-full transition-all duration-300" />
            </a>
          ))}

        </div>

        {/* Reservation CTA */}
        <a
          href="#reservation"
          className="hidden md:flex items-center gap-3
            bg-[#3B241A] text-white px-6 py-3
            rounded-full text-sm font-semibold
            hover:bg-[#C8A96A] hover:text-[#3B241A]
            transition duration-300"
        >
          Reserve a Table
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-[#3B241A] p-2"
          aria-label="Toggle navigation"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="xl:hidden max-w-[1450px] mx-auto
              mt-3 bg-[#FFFDF8] rounded-3xl
              shadow-2xl p-6 border border-[#E8DCCB]"
          >

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[#3B241A]
                  border-b border-[#EDE5DA]
                  hover:text-[#C8A96A] transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center
                gap-3 bg-[#3B241A] text-white
                rounded-full py-4 font-semibold"
            >
              Reserve a Table
              <ArrowUpRight size={18} />
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
