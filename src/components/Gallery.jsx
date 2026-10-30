
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const photos = [
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=90",
    title: "The art of a perfect pour",
    subtitle: "COFFEE, CRAFT & COMFORT",
    size: "large",
  },
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=90",
    title: "Slow mornings",
    subtitle: "A LITTLE EVERYDAY MAGIC",
    size: "medium",
  },
  {
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&q=90",
    title: "Your favourite corner",
    subtitle: "MADE FOR STAYING",
    size: "medium",
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&q=90",
    title: "Coffee, made personal",
    subtitle: "THE MAISON RITUAL",
    size: "small",
  },
  {
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=90",
    title: "Something sweet",
    subtitle: "FRESH FROM OUR KITCHEN",
    size: "small",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#F4EEE6] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end md:gap-16"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B58A55]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A17B4D]">
                The Maison Journal · 01
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#3B241A] sm:text-6xl lg:text-7xl">
              Moments worth
              <span className="block italic text-[#A77B4C]">
                lingering over.
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:pb-2">
            <p className="max-w-md text-sm leading-8 text-[#78685B]">
              The aroma of freshly brewed coffee. The warmth of familiar
              conversations. The little details that turn an ordinary visit
              into something memorable.
            </p>
            <p className="mt-5 font-serif text-lg italic text-[#A17B4D]">
              This is the Maison feeling.
            </p>
          </div>
        </motion.div>

        {/* Editorial photo collection */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12">

          {photos.map((photo, index) => {
            const layout =
              index === 0
                ? "md:col-span-7 md:row-span-2"
                : index === 1 || index === 2
                  ? "md:col-span-5"
                  : "md:col-span-6";

            const height =
              index === 0
                ? "min-h-[420px] md:min-h-[610px]"
                : index < 3
                  ? "min-h-[260px] md:min-h-[297px]"
                  : "min-h-[280px]";

            return (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group relative ${layout} ${height} min-w-0 overflow-hidden bg-[#D9C8B4]`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#24150F]/80 via-[#24150F]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 sm:p-8">
                  <div className="min-w-0">
                    <p className="mb-3 text-[9px] font-semibold tracking-[0.3em] text-[#E8C99D]">
                      {photo.subtitle}
                    </p>
                    <h3 className="max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
                      {photo.title}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#3B241A]">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <span className="absolute right-5 top-5 font-serif text-sm italic text-white/80">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col justify-between gap-7 border-t border-[#D7C7B6] pt-8 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A17B4D]">
              More than just coffee
            </p>
            <h3 className="font-serif text-2xl italic text-[#3B241A] sm:text-3xl">
              Come for the coffee. Stay for the feeling.
            </h3>
          </div>

          <a
            href="#reservation"
            className="inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#3B241A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFFDF8] transition-all duration-300 hover:bg-[#8B6245]"
          >
            Experience Maison
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
