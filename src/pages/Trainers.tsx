import { motion } from "framer-motion";

const trainers: { name: string; role: string; image: string }[] = [
  {
    name: "Daniel Tesfaye",
    role: "Head Strength Coach",
    image: "/trainer_placeholder.jpg",
  },
  {
    name: "Sara Mekonnen",
    role: "HIIT & Conditioning Coach",
    image: "/trainer_placeholder.jpg",
  },
  {
    name: "Michael Bekele",
    role: "Personal Trainer",
    image: "/trainer_placeholder.jpg",
  },
];

const Trainers = () => {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide">
            Meet Our Trainers
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Experienced coaches dedicated to helping you train smarter,
            stronger, and safer.
          </p>
        </motion.div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-zinc-900"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="mt-2 text-sm text-red-500 uppercase tracking-wide">
                  {trainer.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
