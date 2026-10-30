
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { useRef } from "react";

const bestSellers = [
  {
    number: "01",
    name: "Velvet Latte",
    subtitle: "Smooth. Creamy. Unforgettable.",
    description:
      "Our signature espresso blended with silky steamed milk and a delicate layer of foam.",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=90",
    tag: "CUSTOMER FAVOURITE",
  },
  {
    number: "02",
    name: "Midnight Mocha",
    subtitle: "For the chocolate lovers.",
    description:
      "Bold espresso meets rich chocolate, finished with a soft cloud of milk.",
    price: "₹250",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=90",
    tag: "MOST LOVED",
  },
  {
    number: "03",
    name: "Golden Croissant",
    subtitle: "Fresh from the oven.",
    description:
      "A buttery, flaky pastry with golden layers and a wonderfully delicate crunch.",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=90",
    tag: "FRESHLY BAKED",
  },
];

function BestSellers() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 420 : -420,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="bestsellers"
      className="bg-[#FFFDF8] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-[1px] bg-[#C8A96A]" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#A17C42]">
                The crowd favourites
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl text-[#3B241A] leading-tight">
              Loved at first
              <span className="italic text-[#A77B4D]"> sip.</span>
            </h2>

            <p className="text-sm text-[#927E6B] mt-5 max-w-[420px] leading-7">
              A few Maison favourites that keep our guests coming back
              for just one more bite or one more cup.
            </p>
          </motion.div>

          {/* SCROLL CONTROLS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll products left"
              className="w-12 h-12 rounded-full border border-[#DCCDBB] flex items-center justify-center text-[#3B241A] hover:bg-[#3B241A] hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll products right"
              className="w-12 h-12 rounded-full bg-[#3B241A] text-white flex items-center justify-center hover:bg-[#C8A96A] hover:text-[#3B241A] transition-all duration-300"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* PRODUCT SHOWCASE */}
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {bestSellers.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group min-w-[290px] sm:min-w-[370px] md:min-w-[420px] snap-start"
            >
              {/* PRODUCT IMAGE */}
              <div className="relative h-[360px] md:h-[440px] overflow-hidden rounded-[4px] bg-[#F1E8DB]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute top-5 left-5 bg-[#FFFDF8]/95 backdrop-blur-sm px-4 py-3">
                  <p className="text-[9px] tracking-[2px] text-[#987347]">
                    {item.tag}
                  </p>
                </div>

                <div className="absolute bottom-5 right-5 bg-[#FFFDF8] w-12 h-12 flex items-center justify-center rounded-full shadow-lg group-hover:bg-[#C8A96A] transition-colors">
                  <ArrowUpRight size={20} className="text-[#3B241A]" />
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-4xl text-[#D4C2AA]">
                    {item.number}
                  </span>

                  <div className="flex items-center gap-1 text-[#B18B56]">
                    <Star size={13} fill="currentColor" />
                    <span className="text-[10px] tracking-wider text-[#806D5E]">
                      MAISON PICK
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-baseline gap-3 mt-3">
                  <h3 className="font-serif text-3xl md:text-4xl text-[#3B241A]">
                    {item.name}
                  </h3>

                  <span className="font-serif text-xl text-[#A77B4D]">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm italic text-[#A17C42] mt-2">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#927E6B] leading-7 mt-3 max-w-[380px]">
                  {item.description}
                </p>

                <a
                  href="#reservation"
                  className="inline-flex items-center gap-3 mt-5 text-xs font-semibold tracking-wide text-[#3B241A] border-b border-[#C8A96A] pb-2 hover:text-[#A77B4D] transition"
                >
                  Make it your favourite
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 pt-7 border-t border-[#E9DDCC] flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-serif italic text-xl text-[#A77B4D]">
            Some favourites are meant to be shared.
          </p>

          <a
            href="#menu"
            className="text-xs font-semibold text-[#6F5543] hover:text-[#C8A96A] transition"
          >
            Explore the full menu ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
