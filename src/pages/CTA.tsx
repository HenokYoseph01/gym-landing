import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      <section className="bg-red-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide">
              Start Yout Transformation Today
            </h2>

            <p className="mb-10 text-lg text-white/90">
              Be part of a community that pushes you to be stronger, healthier
              and more confident
            </p>

            <button className="rounded-xl bg-white px-12 py-4 text-lg font-semibold text-red-600 transition hover:scale-105">
              Book a Free Session
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTA;
