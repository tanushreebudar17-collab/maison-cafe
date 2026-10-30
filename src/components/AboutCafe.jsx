
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Thoughtfully Brewed",
    description: "Every cup is prepared with care, patience and passion.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "Fresh ingredients and carefully selected coffee beans.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description: "A welcoming space made for meaningful little moments.",
  },
];

function AboutCafe() {
  return (
    <section
      id="about"
      className="w-full bg-[#FFFDF8] py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-[1250px] mx-auto">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[1px] bg-[#C8A96A]" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#A17C42]">
              The story behind every cup
            </span>
          </div>

          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#3B241A]">
            A place to slow down.
            <br />
            <span className="italic text-[#A77B4D]">
              A reason to stay.
            </span>
          </h2>
        </motion.div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative w-full">

              {/* Main image */}
              <div className="w-full h-[390px] sm:h-[480px] md:h-[540px] overflow-hidden rounded-t-[220px] rounded-b-2xl">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=90"
                  alt="Beautiful and welcoming café interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Small decorative label */}
              <div className="absolute top-7 left-7 bg-[#FFFDF8]/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-[#A17C42]">
                  <Sparkles size={15} />
                  <span className="text-[9px] uppercase tracking-[2px]">
                    The Maison experience
                  </span>
                </div>
                <p className="font-serif text-xl text-[#3B241A] mt-1">
                  Est. 2018
                </p>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#3B241A]/90 backdrop-blur-sm rounded-xl p-5">
                <p className="text-[9px] tracking-[3px] uppercase text-[#D8B779]">
                  Our philosophy
                </p>
                <p className="font-serif italic text-2xl text-[#FFFDF8] mt-1">
                  Good coffee. Better moments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="font-serif text-6xl text-[#C8A96A] leading-none">
              “
            </span>

            <h3 className="font-serif text-3xl md:text-[42px] leading-[1.2] text-[#3B241A] -mt-2">
              Life feels a little
              <span className="italic text-[#A77B4D]"> better </span>
              with a good cup of coffee.
            </h3>

            <p className="text-[#806D5E] text-sm md:text-base leading-8 mt-7">
              Maison Café was imagined as more than a place to grab your
              morning coffee. It is a space to pause, reconnect and enjoy
              the simple things.
            </p>

            <p className="text-[#806D5E] text-sm md:text-base leading-8 mt-4">
              From the aroma of freshly ground beans to the warmth of
              conversations around our tables, every little detail is
              thoughtfully created to make you feel welcome.
            </p>

            {/* FEATURES */}
            <div className="mt-9 border-t border-[#E9DDCC]">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex items-center gap-5 py-5 border-b border-[#E9DDCC] group"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A17C42] group-hover:bg-[#3B241A] group-hover:text-[#D8B779] transition-all duration-300">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="font-serif text-xl text-[#3B241A]">
                        {feature.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#927E6B] mt-1 leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTON */}
            <a
              href="#menu"
              className="inline-flex items-center gap-4 mt-9 bg-[#3B241A] text-[#FFFDF8] px-7 py-4 rounded-full text-sm hover:bg-[#C8A96A] hover:text-[#3B241A] transition-all duration-300 group"
            >
              Explore Our Menu
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>

        {/* BOTTOM BRAND STRIP */}
        <div className="mt-20 pt-7 border-t border-[#E9DDCC] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-serif italic text-xl md:text-2xl text-[#A77B4D]">
            Your everyday escape, served in a cup.
          </p>

          <span className="text-[9px] tracking-[3px] uppercase text-[#A18C78]">
            Coffee · Comfort · Connection
          </span>
        </div>

      </div>
    </section>
  );
}

export default AboutCafe;
