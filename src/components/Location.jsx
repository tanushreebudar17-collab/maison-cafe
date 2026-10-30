
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

const openingHours = [
  { day: "Monday – Friday", hours: "09:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "09:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 10:00 PM" },
];

function Location() {
  // Replace these details with your actual café information.
  const address = "Your Café Address, Mumbai, Maharashtra";
  const phone = "+91 98765 43210";

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section
      id="location"
      className="overflow-hidden bg-[#F8F4EE] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-7 md:grid-cols-2 md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B58A55]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A17B4D]">
                Find your way to us
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[1.1] text-[#3B241A] sm:text-6xl md:text-7xl">
              Your little
              <span className="block italic text-[#A77B4C]">
                corner of calm.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#78685B] md:justify-self-end">
            Tucked away from the everyday rush, there's a warm cup, a
            welcoming seat and a little time waiting just for you.
          </p>
        </motion.div>

        {/* Main location layout */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[380px] overflow-hidden bg-[#E7DDD0] sm:min-h-[500px]"
          >
            <iframe
              title="Maison Café location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-[#FFFDF8] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3B241A] shadow-lg transition-colors hover:bg-[#3B241A] hover:text-white"
            >
              <Navigation size={15} />
              Get directions
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* Information panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between bg-[#3B241A] p-8 sm:p-10 md:p-12"
          >
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6B27E]">
                Come find us
              </p>

              <h3 className="font-serif text-4xl leading-tight text-[#FFFDF8] sm:text-5xl">
                We saved you a seat.
              </h3>

              {/* Address */}
              <div className="mt-12 border-t border-white/15 pt-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#D6B27E]" size={20} />
                  <div className="min-w-0">
                    <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B27E]">
                      Our address
                    </h4>
                    <p className="text-sm leading-7 text-[#F4E9DC]">
                      {address}
                    </p>
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs text-[#D6B27E] hover:text-white"
                    >
                      View on Google Maps
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="mt-8 border-t border-white/15 pt-7">
                <div className="mb-5 flex items-center gap-4">
                  <Clock className="text-[#D6B27E]" size={20} />
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B27E]">
                    Opening hours
                  </h4>
                </div>

                <div className="space-y-4">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex flex-wrap justify-between gap-2 text-xs"
                    >
                      <span className="text-[#E0D2C4]">{item.day}</span>
                      <span className="text-[#FFFDF8]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 border-t border-white/15 pt-7">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#D6B27E]" size={20} />
                  <div>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B27E]">
                      Call us
                    </h4>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-sm text-[#FFFDF8] transition-colors hover:text-[#D6B27E]"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#reservation"
              className="mt-12 flex w-full items-center justify-between gap-3 border border-[#C8A96A]/60 px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFFDF8] transition-all duration-300 hover:bg-[#C8A96A] hover:text-[#3B241A]"
            >
              Plan your visit
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Bottom detail */}
        <div className="mt-9 flex flex-col justify-between gap-3 border-t border-[#DCCFC0] pt-6 sm:flex-row sm:items-center">
          <p className="font-serif text-lg italic text-[#806F63]">
            Good coffee is always worth the journey.
          </p>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#A17B4D]">
            Maison Café · Your neighbourhood escape
          </span>
        </div>

      </div>
    </section>
  );
}

export default Location;
