
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Mehta",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=85",
    review:
      "The coffee, the atmosphere, the little details — everything feels thoughtfully put together. Easily one of my favourite places to unwind.",
    order: "THE SIGNATURE LATTE",
  },
  {
    name: "Ananya Sharma",
    location: "Thane",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=85",
    review:
      "A beautiful little escape from the busy day. The pastries are lovely, the coffee is wonderful, and the ambience is simply unmatched.",
    order: "THE BUTTER CROISSANT",
  },
  {
    name: "Rohan Kapoor",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=85",
    review:
      "It's the kind of café where you plan to stay for thirty minutes and somehow end up spending your entire afternoon.",
    order: "THE COLD BREW",
  },
];

function Testimonials() {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-[#3B241A] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C8A96A]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D6B27E]">
                Notes from our guests
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[1.1] text-[#FFFDF8] sm:text-6xl md:text-7xl">
              Don't just take
              <span className="block italic text-[#D5B17D]">
                our word for it.
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:pb-2">
            <p className="max-w-md text-sm leading-8 text-[#E0D2C4]/75">
              The best part of Maison Café isn't just what's in the cup.
              It's the memories, conversations and moments shared around it.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl tracking-[0.15em] text-[#D6B27E]">
                ★★★★★
              </span>
              <span className="text-xs text-[#E0D2C4]/70">
                Made with love, served with care
              </span>
            </div>
          </div>
        </motion.div>

        {/* Featured review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-7 overflow-hidden border border-[#8B6B50]/50 bg-[#4A3024] p-8 sm:p-12 md:p-16"
        >
          <span className="absolute right-7 top-0 font-serif text-[150px] leading-none text-[#D6B27E]/10 sm:right-12 sm:text-[210px]">
            “
          </span>

          <div className="relative z-10 max-w-4xl">
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6B27E]">
              A guest favourite
            </p>

            <div className="mb-6 text-2xl tracking-[0.2em] text-[#D6B27E]">
              ★★★★★
            </div>

            <blockquote className="font-serif text-3xl leading-[1.4] text-[#FFFDF8] sm:text-4xl md:text-5xl">
              "Some places serve coffee. Others give you a reason to slow
              down. Maison Café does both beautifully."
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=85"
                alt="Featured customer"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-lg text-[#FFFDF8]">
                  A happy Maison guest
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#D6B27E]">
                  A moment worth remembering
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer review cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex min-w-0 flex-col border border-[#8B6B50]/40 bg-[#FFFDF8] p-7 transition-transform duration-300 hover:-translate-y-2 sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-lg tracking-[0.15em] text-[#B58A55]">
                  ★★★★★
                </span>
                <span className="font-serif text-sm italic text-[#B58A55]">
                  0{index + 1}
                </span>
              </div>

              <p className="flex-1 font-serif text-xl leading-8 text-[#3B241A]">
                “{review.review}”
              </p>

              <div className="my-7 h-px bg-[#E5D9CC]" />

              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <h3 className="font-serif text-lg text-[#3B241A]">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#967A63]">
                    {review.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A17B4D]">
                Loved: {review.order}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <span className="h-10 w-px bg-[#C8A96A]/60" />
          <p className="font-serif text-2xl italic text-[#E8D4B8] sm:text-3xl">
            Every visit deserves a little five-star feeling.
          </p>
          <a
            href="#reservation"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#C8A96A]/70 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8D4B8] transition-all duration-300 hover:bg-[#C8A96A] hover:text-[#3B241A]"
          >
            Make a reservation
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
