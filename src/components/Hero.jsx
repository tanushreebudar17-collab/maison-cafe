
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Star,
  Coffee,
  Clock3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8F4EE] text-[#3B241A]"
    >
      {/* Background details */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#E9DCC9]/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D8C19B]/20 blur-3xl" />

      {/* Decorative vertical text */}
      <div className="hidden lg:block absolute left-7 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <span className="text-[9px] tracking-[5px] text-[#A18A70] uppercase">
          Crafted slowly · Served warmly
        </span>
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-12 pt-36 md:pt-40 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="relative z-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[1px] bg-[#C8A96A]" />
              <span className="text-[10px] md:text-xs tracking-[4px] uppercase text-[#9B7950]">
                Welcome to Maison Café
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-[58px] sm:text-7xl md:text-8xl xl:text-[108px] leading-[0.95] tracking-[-3px]"
            >
              A little
              <br />
              pause in
              <br />
              every{" "}
              <span className="italic text-[#A77B4D]">pour.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[430px] text-[#806D5E] text-base md:text-lg leading-8"
            >
              More than just coffee. A warm little corner where beautiful
              mornings begin, conversations flow, and every cup tells a story.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mt-9"
            >
              <a
                href="#menu"
                className="group flex items-center gap-5 bg-[#3B241A] text-[#FFFDF8] px-7 py-4 rounded-full text-sm font-medium hover:bg-[#C8A96A] hover:text-[#3B241A] transition-all duration-300 shadow-lg shadow-[#3B241A]/10"
              >
                Explore Our Menu
                <span className="bg-white/15 rounded-full p-2 group-hover:bg-[#3B241A]/10 transition">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href="#about"
                className="group flex items-center gap-2 text-sm font-semibold text-[#5C4232] hover:text-[#B18B56] transition"
              >
                Discover Our Story
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* BOTTOM DETAILS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 mt-14 pt-7 border-t border-[#DCCDBB] max-w-[470px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Star size={15} fill="#C8A96A" className="text-[#C8A96A]" />
                  <span className="font-serif text-2xl">4.9</span>
                </div>
                <p className="text-[10px] tracking-[2px] uppercase text-[#9A8674] mt-1">
                  Guest Rating
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl">100%</div>
                <p className="text-[10px] tracking-[2px] uppercase text-[#9A8674] mt-1">
                  Freshly Brewed
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl">Since 2018</div>
                <p className="text-[10px] tracking-[2px] uppercase text-[#9A8674] mt-1">
                  Brewing Happiness
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative w-full max-w-[570px] mx-auto lg:ml-auto"
          >
            {/* Main image */}
            <div className="relative h-[460px] sm:h-[570px] lg:h-[650px] w-full">
              <div className="absolute inset-0 rounded-t-[48%] rounded-b-[8px] overflow-hidden shadow-2xl shadow-[#3B241A]/15">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=90"
                  alt="Freshly brewed coffee in a cozy café"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/30 via-transparent to-transparent" />
              </div>

              {/* Image caption */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[9px] tracking-[4px] uppercase text-white/75 mb-2">
                  The Maison Experience
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl italic">
                  Made with warmth.
                </h3>
              </div>

              {/* Floating rating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[18%] -left-7 md:-left-12 bg-[#FFFDF8] rounded-2xl shadow-xl p-4 md:p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#F0E6D5] p-2 rounded-full">
                    <Coffee size={18} className="text-[#8A5A37]" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-[#92765C]">
                    Our Signature
                  </span>
                </div>
                <p className="font-serif text-lg text-[#3B241A]">
                  The Perfect Brew
                </p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={11}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating opening hours card */}
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[20%] -right-3 md:-right-9 bg-[#3B241A] text-[#FFFDF8] rounded-2xl p-4 md:p-5 shadow-xl"
              >
                <div className="flex items-center gap-2 text-[#D8B779] mb-2">
                  <Clock3 size={16} />
                  <span className="text-[9px] tracking-[2px] uppercase">
                    Come Visit
                  </span>
                </div>
                <p className="font-serif text-xl">Your daily escape.</p>
                <p className="text-xs text-white/60 mt-1">
                  A seat is always waiting.
                </p>
              </motion.div>

              {/* Decorative circle */}
              <div className="absolute -z-10 -bottom-7 -left-7 w-32 h-32 border border-[#C8A96A]/50 rounded-full" />
              <div className="absolute -z-10 top-10 -right-8 w-20 h-20 border border-[#C8A96A]/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#9B8066] hover:text-[#3B241A] transition"
      >
        <span className="text-[9px] tracking-[3px] uppercase">
          Scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={17} />
        </motion.span>
      </a>
    </section>
  );
}

export default Hero;
