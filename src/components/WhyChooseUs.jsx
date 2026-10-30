
import { motion } from "framer-motion";
import {
  Coffee,
  Leaf,
  Heart,
  Armchair,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Coffee,
    title: "Coffee Worth Waking Up For",
    description:
      "Carefully prepared coffee with rich flavours and a beautiful aroma in every cup.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Freshness in Every Bite",
    description:
      "Thoughtfully selected ingredients and freshly prepared treats for every visit.",
  },
  {
    number: "03",
    icon: Armchair,
    title: "Your Little Escape",
    description:
      "A comfortable atmosphere where you can work, relax, catch up or simply unwind.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Made for Moments",
    description:
      "Friendly service and thoughtful details that make every visit feel special.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#FFFDF8] py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-[1px] bg-[#C8A96A]" />
              <Sparkles size={15} className="text-[#A17C42]" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#A17C42]">
                The Maison difference
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl text-[#3B241A] leading-[1.08]">
              Little details.
              <br />
              <span className="italic text-[#A77B4D]">
                Big difference.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base text-[#927E6B] leading-8 max-w-[430px] lg:ml-auto"
          >
            We believe the best café experiences are built from
            the little things. The first sip, the warm welcome
            and the feeling of wanting to stay a little longer.
          </motion.p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="h-[440px] md:h-[560px] overflow-hidden rounded-t-[220px] rounded-b-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=90"
                alt="Warm and inviting café seating area"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            <div className="absolute -bottom-7 right-5 md:-right-7 bg-[#3B241A] text-[#FFFDF8] p-6 md:p-8 max-w-[230px] shadow-xl">
              <p className="font-serif italic text-3xl text-[#D8B779]">
                Feel at home.
              </p>
              <p className="text-xs leading-6 text-white/70 mt-3">
                Your favourite corner is waiting.
              </p>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="pt-2 lg:pt-0">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group flex gap-5 md:gap-7 py-7 border-b border-[#E9DDCC] first:border-t"
                >
                  <span className="font-serif text-3xl text-[#D2BFA8] pt-1">
                    {reason.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl md:text-2xl text-[#3B241A] group-hover:text-[#A77B4D] transition-colors">
                        {reason.title}
                      </h3>

                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A17C42] group-hover:bg-[#3B241A] group-hover:text-[#D8B779] transition-all duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    <p className="text-sm text-[#927E6B] leading-7 mt-3 max-w-[420px]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <a
              href="#reservation"
              className="inline-flex items-center gap-3 mt-9 text-sm font-semibold text-[#3B241A] border-b border-[#C8A96A] pb-2 hover:text-[#A77B4D] transition"
            >
              Experience Maison Café
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-24 pt-8 border-t border-[#E9DDCC] flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-serif italic text-xl md:text-2xl text-[#A77B4D]">
            It's not just where you go. It's how you feel.
          </p>

          <span className="text-[9px] tracking-[3px] uppercase text-[#A18C78] self-center">
            The Maison difference
          </span>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
