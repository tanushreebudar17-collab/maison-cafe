
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Flame,
  Heart,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Coffee,
    title: "The Finest Beans",
    description:
      "Carefully selected coffee beans bring depth, aroma and character to every cup.",
  },
  {
    number: "02",
    icon: Flame,
    title: "Perfectly Crafted",
    description:
      "Our coffee is prepared with attention to every detail, from the first grind to the final pour.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Served With Love",
    description:
      "A beautiful cup, a welcoming smile and a moment worth remembering.",
  },
];

function CoffeeExperience() {
  return (
    <section
      id="experience"
      className="bg-[#3B241A] text-[#FFFDF8] overflow-hidden"
    >
      {/* TOP INTRO */}
      <div className="max-w-[1250px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-[1px] bg-[#C8A96A]" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#D8B779]">
                The art of coffee
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Every cup has
              <br />
              <span className="italic text-[#D8B779]">
                its own story.
              </span>
            </h2>
          </div>

          <p className="text-[#D2BFAE] text-sm md:text-base leading-8 max-w-[430px] md:ml-auto">
            Great coffee is never just about the beans. It is about
            the little details, the craft and the feeling that stays
            with you long after the last sip.
          </p>
        </motion.div>
      </div>

      {/* FULL WIDTH IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full h-[400px] md:h-[620px] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=90"
          alt="Coffee being carefully prepared by a barista"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#24140D]/75 via-[#24140D]/20 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1250px] w-full mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[540px]"
            >
              <span className="text-[10px] tracking-[4px] uppercase text-[#E4C88E]">
                A ritual worth enjoying
              </span>

              <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.08] mt-5">
                Not rushed.
                <br />
                Never ordinary.
              </h3>

              <p className="text-white/75 text-sm md:text-base leading-7 mt-6 max-w-[390px]">
                Take a breath, find your favourite corner and let
                the world slow down for a little while.
              </p>

              <a
                href="#menu"
                className="inline-flex items-center gap-4 mt-8 bg-[#FFFDF8] text-[#3B241A] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#C8A96A] transition-all duration-300"
              >
                Find Your Favourite
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* IMAGE LABEL */}
        <div className="absolute bottom-7 right-7 hidden md:flex items-center gap-3 text-white/80">
          <Sparkles size={15} className="text-[#D8B779]" />
          <span className="text-[9px] tracking-[3px] uppercase">
            Crafted at Maison Café
          </span>
        </div>
      </motion.div>

      {/* THREE EXPERIENCE STEPS */}
      <div className="max-w-[1250px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative border-t border-[#795844] pt-7"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-4xl text-[#C8A96A]">
                    {step.number}
                  </span>

                  <div className="w-12 h-12 rounded-full border border-[#795844] flex items-center justify-center text-[#D8B779]">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl">
                  {step.title}
                </h3>

                <p className="text-sm text-[#C8B5A4] leading-7 mt-4 max-w-[340px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SIGNATURE */}
        <div className="mt-20 pt-8 border-t border-[#795844] flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-serif italic text-xl md:text-2xl text-[#D8B779]">
            A little more than coffee. A whole lot of feeling.
          </p>

          <span className="text-[9px] tracking-[3px] uppercase text-[#B99E88] self-center">
            Made for your moments
          </span>
        </div>
      </div>
    </section>
  );
}

export default CoffeeExperience;
