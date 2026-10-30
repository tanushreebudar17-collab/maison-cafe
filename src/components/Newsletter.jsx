
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, CheckCircle2 } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Demo interaction: connect a mailing service to store subscriptions.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="overflow-hidden bg-[#F4EEE6] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#DCC8AD] px-7 py-14 sm:px-12 md:px-20 md:py-20"
        >
          {/* Decorative background details */}
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#A17B4D]/20" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-60 w-60 rounded-full border border-[#A17B4D]/20" />
          <div className="pointer-events-none absolute bottom-[-100px] left-[35%] h-64 w-64 rounded-full border border-[#A17B4D]/20" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            {/* Text */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Coffee size={17} className="text-[#80563D]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#80563D]">
                  A little note from Maison
                </p>
              </div>

              <h2 className="max-w-xl font-serif text-5xl leading-[1.08] text-[#3B241A] sm:text-6xl md:text-7xl">
                Stay for the
                <span className="block italic text-[#966C43]">
                  good things.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#685143]">
                Be the first to hear about seasonal specials, fresh arrivals,
                little surprises and lovely things happening at Maison Café.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <span className="h-px w-9 bg-[#A17B4D]" />
                <span className="font-serif text-lg italic text-[#80563D]">
                  Good things, delivered occasionally.
                </span>
              </div>
            </div>

            {/* Subscription form */}
            <div className="relative min-w-0 bg-[#FFFDF8] p-7 shadow-[0_20px_60px_rgba(59,36,26,0.08)] sm:p-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17B4D]">
                The Maison mailing list
              </p>

              <h3 className="font-serif text-3xl leading-tight text-[#3B241A] sm:text-4xl">
                A little something in your inbox.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#88776A]">
                Leave us your email and stay connected with your favourite
                coffee corner.
              </p>

              <form onSubmit={handleSubmit} className="mt-9">
                <label
                  htmlFor="newsletter-email"
                  className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806F63]"
                >
                  Your email address
                </label>

                <div className="flex min-w-0 items-center border-b border-[#DCCFC0]">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubscribed(false);
                    }}
                    placeholder="you@example.com"
                    required
                    className="min-w-0 flex-1 bg-transparent py-4 text-sm text-[#3B241A] outline-none placeholder:text-[#B4A79B]"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3B241A] text-white transition-all duration-300 hover:rotate-45 hover:bg-[#8B6245]"
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>
              </form>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-2 text-sm text-[#54724D]"
                >
                  <CheckCircle2 size={17} />
                  Thank you! Your demo subscription was successful.
                </motion.div>
              ) : (
                <p className="mt-6 text-[10px] leading-5 text-[#A18F80]">
                  No spam. Just lovely updates from Maison Café.
                </p>
              )}
            </div>
          </div>

          <div className="relative z-10 mt-14 flex items-center justify-between border-t border-[#A17B4D]/30 pt-6">
            <span className="font-serif text-lg italic text-[#80563D]">
              With love, Maison Café.
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#80563D]">
              Stay a little longer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
