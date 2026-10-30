
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Coffee, Sparkles } from "lucide-react";

const categories = ["All", "Coffee", "Cold Drinks", "Bakery", "Food"];

const menuItems = [
  {
    id: 1,
    name: "Caramel Macchiato",
    category: "Coffee",
    description: "Rich espresso, silky milk and a delicate caramel finish.",
    price: "₹220",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Classic Cappuccino",
    category: "Coffee",
    description: "A perfect balance of espresso, steamed milk and foam.",
    price: "₹180",
    tag: "Classic",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Iced Spanish Latte",
    category: "Cold Drinks",
    description: "Chilled espresso blended with creamy sweet milk.",
    price: "₹250",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Chocolate Croissant",
    category: "Bakery",
    description: "Golden flaky pastry with a rich chocolate centre.",
    price: "₹160",
    tag: "Freshly Baked",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Strawberry Cheesecake",
    category: "Bakery",
    description: "Creamy cheesecake topped with sweet strawberry glaze.",
    price: "₹280",
    tag: "Chef's Pick",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Avocado Toast",
    category: "Food",
    description: "Toasted sourdough with creamy avocado and herbs.",
    price: "₹320",
    tag: "Fresh Choice",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85",
  },
];

function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="menu"
      className="bg-[#F8F4EE] py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[700px] mx-auto"
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <span className="w-9 h-[1px] bg-[#C8A96A]" />
            <Sparkles size={15} className="text-[#B18B56]" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#A17C42]">
              A taste of Maison
            </span>
            <span className="w-9 h-[1px] bg-[#C8A96A]" />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl text-[#3B241A] leading-tight">
            Made to be
            <span className="italic text-[#A77B4D]"> savoured.</span>
          </h2>

          <p className="text-[#8D7967] text-sm md:text-base leading-7 mt-5">
            From your favourite morning coffee to something sweet
            for the afternoon, discover little things worth coming back for.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-xs md:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#3B241A] text-[#FFFDF8] shadow-lg"
                  : "bg-[#FFFDF8] text-[#806D5E] border border-[#E8DDCF] hover:border-[#C8A96A] hover:text-[#3B241A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group min-w-0 bg-[#FFFDF8] rounded-[22px] overflow-hidden border border-[#EDE3D6] hover:shadow-[0_20px_50px_rgba(59,36,26,0.10)] transition-shadow duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 bg-[#FFFDF8]/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[9px] tracking-[1.5px] uppercase text-[#8A633D]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#FFFDF8] flex items-center justify-center text-[#3B241A] shadow-lg group-hover:bg-[#C8A96A] transition-colors duration-300">
                    <Coffee size={19} />
                  </div>
                </div>

                {/* DETAILS */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] tracking-[2px] uppercase text-[#A17C42] mb-2">
                        {item.category}
                      </p>

                      <h3 className="font-serif text-2xl text-[#3B241A]">
                        {item.name}
                      </h3>
                    </div>

                    <span className="font-serif text-xl text-[#A77B4D] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-sm text-[#927E6B] leading-6 mt-3 min-h-[48px]">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#EDE3D6] flex justify-between items-center">
                    <span className="text-[9px] tracking-[2px] uppercase text-[#A18C78]">
                      Maison Selection
                    </span>

                    <a
                      href="#reservation"
                      aria-label={`Reserve a table to enjoy ${item.name}`}
                      className="flex items-center gap-2 text-xs font-semibold text-[#6F4A32] hover:text-[#C8A96A] transition"
                    >
                      Enjoy this
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-16 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-[#A77B4D]">
            Something delicious is always brewing.
          </p>

          <a
            href="#reservation"
            className="inline-flex items-center gap-3 mt-6 px-8 py-4 rounded-full bg-[#3B241A] text-[#FFFDF8] text-sm hover:bg-[#C8A96A] hover:text-[#3B241A] transition-all duration-300"
          >
            Visit Maison Café
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default SignatureMenu;
