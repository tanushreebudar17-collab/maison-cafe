
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, Users, Phone } from "lucide-react";

function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = (e) => {
    e.preventDefault();

    if (!date || !name.trim() || !phone.trim()) {
      alert("Please fill in your name, phone number and preferred date.");
      return;
    }

    const message = `Hello Maison Café! I'd like to reserve a table.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}

Please confirm my reservation.`;

    // Replace this with your actual WhatsApp business number.
    const whatsappNumber = "919876543210";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="reservation"
      className="overflow-hidden bg-[#F4EEE6] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A17B4D]">
            Your table is waiting
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#3B241A] sm:text-6xl md:text-7xl">
            Make room for
            <span className="block italic text-[#A77B4C]">
              a little happiness.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#78685B]">
            Good coffee, lovely conversations and a table saved just for you.
            Reserve your little moment at Maison.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid overflow-hidden bg-[#FFFDF8] shadow-[0_25px_80px_rgba(59,36,26,0.08)] lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Image panel */}
          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90"
              alt="Beautiful restaurant dining space"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#24150F]/85 via-[#24150F]/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E6C994]">
                The Maison experience
              </p>

              <h3 className="max-w-sm font-serif text-4xl leading-tight text-white sm:text-5xl">
                Good moments deserve good company.
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                Whether it's a morning coffee date or an evening with friends,
                we'd love to have you here.
              </p>

              <div className="mt-9 flex items-center gap-3 text-xs tracking-wider text-white/90">
                <span className="h-px w-8 bg-[#D6B27E]" />
                A PLACE TO CALL YOUR OWN
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="min-w-0 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="mb-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A17B4D]">
                Reservation details
              </p>

              <h3 className="font-serif text-3xl text-[#3B241A] sm:text-4xl">
                Book your table
              </h3>

              <p className="mt-3 text-sm text-[#8B796A]">
                Tell us a little about your visit.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-7">

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full border-b border-[#DCCFC0] bg-transparent px-1 py-3 text-sm text-[#3B241A] outline-none transition-colors placeholder:text-[#B4A79B] focus:border-[#A17B4D]"
                />
              </div>

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]">
                  Phone number
                </label>
                <div className="flex items-center gap-3 border-b border-[#DCCFC0]">
                  <Phone size={16} className="text-[#A17B4D]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your contact number"
                    required
                    className="w-full bg-transparent py-3 text-sm text-[#3B241A] outline-none placeholder:text-[#B4A79B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div>
                  <label className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]">
                    <CalendarDays size={14} />
                    Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full min-w-0 border-b border-[#DCCFC0] bg-transparent py-3 text-sm text-[#3B241A] outline-none focus:border-[#A17B4D]"
                  />
                </div>

                <div>
                  <label className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]">
                    <Clock size={14} />
                    Preferred time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full min-w-0 border-b border-[#DCCFC0] bg-transparent py-3 text-sm text-[#3B241A] outline-none focus:border-[#A17B4D]"
                  >
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                    <option>09:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]">
                  <Users size={14} />
                  Number of guests
                </label>

                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border-b border-[#DCCFC0] bg-transparent py-3 text-sm text-[#3B241A] outline-none focus:border-[#A17B4D]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>

              <button
                type="submit"
                className="group mt-5 flex w-full items-center justify-between gap-4 bg-[#3B241A] px-7 py-5 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFFDF8] transition-all duration-300 hover:bg-[#80563D]"
              >
                <span>Request a reservation</span>
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="text-center text-[10px] leading-5 text-[#A18F80]">
                Your booking request will open in WhatsApp for confirmation.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Reservation;
