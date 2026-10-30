
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Olivia Bennett",
    role: "Head Barista",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=90",
    description: "Turning every cup into a little masterpiece.",
  },
  {
    name: "James Carter",
    role: "Head Chef",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=90",
    description: "Creating comfort, one plate at a time.",
  },
  {
    name: "Sophia Miller",
    role: "Café Manager",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=90",
    description: "Making every visit feel like coming home.",
  },
];

function MeetOurTeam() {
  return (
    <section className="overflow-hidden bg-[#FFFDF8] px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B58A55]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A17B4D]">
                The people behind the pour
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[1.08] text-[#3B241A] sm:text-6xl md:text-7xl">
              Familiar faces,
              <span className="block italic text-[#A77B4C]">
                genuine warmth.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-[#78685B]">
            A little passion, a lot of heart, and people who believe the
            smallest details make the biggest difference.
          </p>
        </motion.div>

        {/* Team introduction */}
        <div className="relative mb-20 grid overflow-hidden bg-[#3B241A] md:grid-cols-2">
          <div className="relative min-h-[330px] overflow-hidden md:min-h-[470px]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=90"
              alt="Warm and welcoming café interior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 md:px-16 md:py-16">
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#D6B27E]">
              A little about us
            </p>

            <h3 className="max-w-lg font-serif text-4xl leading-tight text-[#FFFDF8] sm:text-5xl">
              Good coffee is made by people who care.
            </h3>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#E0D2C4]/80">
              At Maison Café, we are more than a team. We are coffee lovers,
              food enthusiasts and warm hosts who come together to create
              moments worth remembering.
            </p>

            <a
              href="#reservation"
              className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#C8A96A] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6C994] transition-colors hover:text-white"
            >
              Spend a moment with us
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Individual team portraits */}
        <div className="mb-9 flex items-center justify-between">
          <h3 className="font-serif text-3xl text-[#3B241A] sm:text-4xl">
            Meet the team
          </h3>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A17B4D]">
            Our people · 01—03
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group min-w-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E9DED1]">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 text-xs tracking-widest text-white drop-shadow">
                  / {person.number}
                </span>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFDF8] text-[#3B241A] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 border-b border-[#DCCFC0] py-5">
                <div className="min-w-0">
                  <h4 className="font-serif text-2xl text-[#3B241A]">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A17B4D]">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#78685B]">
                    {person.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MeetOurTeam;
