import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/gym_vid.mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.35,
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
        >
          <h1 className="text-5xl font-bold uppercase tracking-tight">
            Train With Purpose
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">
            Strength. Discipline. Results.
          </p>

          <button className="mt-8 rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:scale-105">
            Join Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-80">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓ Scroll
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
