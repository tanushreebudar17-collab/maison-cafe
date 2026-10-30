
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gift,
  Sparkles,
  Coffee,
  CakeSlice,
} from "lucide-react";

const offers = [
  {
    label: "THE MORNING RITUAL",
    title: "Coffee & Croissant",
    description:
      "Your favourite morning coffee paired with a freshly baked croissant.",
    price: "₹299",
    oldPrice: "₹380",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=90",
    icon: Coffee,
  },
  {
    label: "A SWEET LITTLE TREAT",
    title: "Coffee & Cheesecake",
    description:
      "A rich slice of cheesecake with your choice of classic coffee.",
    price: "₹399",
    oldPrice: "₹480",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90",
    icon: CakeSlice,
  },
];

function SpecialOffers() {
  return (
    <section
      id="offers"
      className="bg-[#F8F4EE] py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-[1px] bg-[#C8A96A]" />
              <Sparkles size={15} className="text-[#A17C42]" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#A17C42]">
                A little something extra
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl text-[#3B241A] leading-tight">
              Good things come
              <br />
              <span className="italic text-[#A77B4D]">
                in little packages.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-7 text-[#927E6B] max-w-[330px]">
            Because your favourite coffee tastes even better
            when there's something special alongside it.
          </p>
        </motion.div>

        {/* FEATURED OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[420px] md:min-h-[500px] overflow-hidden rounded-[28px] bg-[#3B241A] mb-8 group"
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90"
            alt="Coffee and café treats"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1500ms]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#24140D]/95 via-[#24140D]/65 to-transparent" />

          <div className="relative z-10 min-h-[420px] md:min-h-[500px] flex items-center px-7 md:px-16 py-12">
            <div className="max-w-[540px]">

              <div className="inline-flex items-center gap-2 bg-[#D8B779] text-[#3B241A] px-4 py-2 rounded-full text-[9px] tracking-[2px] uppercase font-semibold">
                <Gift size={14} />
                Maison Special
              </div>

              <p className="text-[10px] tracking-[4px] uppercase text-[#E1C995] mt-8">
                Your little everyday celebration
              </p>

              <h3 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#FFFDF8] mt-4">
                The perfect
                <br />
                <span className="italic text-[#D8B779]">
                  coffee moment.
                </span>
              </h3>

              <p className="text-sm md:text-base text-white/75 leading-7 mt-6 max-w-[390px]">
                Take a break, treat yourself and make an ordinary
                day feel a little more special.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-3 bg-[#FFFDF8] text-[#3B241A] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#D8B779] transition-all duration-300"
                >
                  Explore the Menu
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SMALL OFFER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#FFFDF8] rounded-[22px] overflow-hidden border border-[#E9DDCC] group"
              >
                <div className="grid grid-cols-[0.9fr_1.1fr] min-h-[260px]">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden min-h-[260px]">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    <div className="absolute top-4 left-4 bg-[#FFFDF8]/90 p-3 rounded-full">
                      <Icon size={18} className="text-[#8A5A37]" />
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="p-5 md:p-7 flex flex-col justify-center min-w-0">
                    <span className="text-[8px] sm:text-[9px] tracking-[2px] uppercase text-[#A17C42]">
                      {offer.label}
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#3B241A] mt-3">
                      {offer.title}
                    </h3>

                    <p className="text-xs text-[#927E6B] leading-6 mt-3">
                      {offer.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-5">
                      <span className="font-serif text-2xl text-[#A77B4D]">
                        {offer.price}
                      </span>

                      <span className="text-xs text-[#A18C78] line-through">
                        {offer.oldPrice}
                      </span>
                    </div>

                    <a
                      href="#reservation"
                      className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-[#3B241A] hover:text-[#A77B4D] transition"
                    >
                      Book your visit
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-[10px] text-[#A18C78] mt-9">
          * Sample promotional offers and prices. Update according to the café's actual offers.
        </p>

      </div>
    </section>
  );
}

export default SpecialOffers;
