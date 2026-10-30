
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Users,
  ArrowUpRight,
  Coffee,
} from "lucide-react";

function BookingBar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [guests, setGuests] = useState("2");

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {
    if (!date) {
      alert("Please select a date for your visit.");
      return;
    }

    const message = `Hello Maison Café! I would like to reserve a table for ${guests} guests on ${date} at ${time}. Please confirm my booking.`;

    // Replace this with the café's WhatsApp number, including country code.
    const phoneNumber = "919876543210";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative bg-[#F8F4EE] px-5 md:px-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-[1250px] mx-auto"
      >
        <div className="relative bg-[#FFFDF8] border border-[#E9DDCC] shadow-[0_20px_60px_rgba(59,36,26,0.08)] rounded-[28px] p-6 md:p-9">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-[1px] bg-[#C8A96A]" />
                <span className="text-[9px] tracking-[3px] uppercase text-[#A17C42]">
                  Your table awaits
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#3B241A]">
                Make it a coffee date.
              </h2>

              <p className="text-sm text-[#917C6A] mt-2">
                Pick your moment. We'll take care of the rest.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3 bg-[#F5EFE5] px-5 py-3 rounded-2xl">
              <div className="bg-[#E9DCC9] p-3 rounded-full">
                <Coffee size={20} className="text-[#765038]" />
              </div>
              <div>
                <p className="text-xs text-[#9B8066]">A little time for you</p>
                <p className="font-serif text-lg text-[#3B241A]">
                  Always worth it.
                </p>
              </div>
            </div>
          </div>

          {/* Booking fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_auto] gap-4 items-end">

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#6F5543] mb-3">
                <CalendarDays size={15} className="text-[#B18B56]" />
                Select Date
              </label>

              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#F8F4EE] border border-[#E8DDCF] rounded-xl px-4 py-4 text-sm text-[#3B241A] outline-none focus:border-[#C8A96A] transition"
              />
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#6F5543] mb-3">
                <Clock3 size={15} className="text-[#B18B56]" />
                Preferred Time
              </label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#F8F4EE] border border-[#E8DDCF] rounded-xl px-4 py-4 text-sm text-[#3B241A] outline-none focus:border-[#C8A96A] transition"
              >
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#6F5543] mb-3">
                <Users size={15} className="text-[#B18B56]" />
                Guests
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#F8F4EE] border border-[#E8DDCF] rounded-xl px-4 py-4 text-sm text-[#3B241A] outline-none focus:border-[#C8A96A] transition"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
              </select>
            </div>

            {/* Booking button */}
            <button
              onClick={handleBooking}
              className="group flex items-center justify-center gap-3 bg-[#3B241A] hover:bg-[#C8A96A] text-[#FFFDF8] hover:text-[#3B241A] rounded-xl px-7 py-4 text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#3B241A]/10"
            >
              Book a Table
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          <p className="text-[10px] text-[#A18C78] mt-5">
            * Your reservation request will be sent through WhatsApp for confirmation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default BookingBar;
