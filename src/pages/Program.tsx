import { motion } from "framer-motion";

const programs: { title: string; description: string }[] = [
  {
    title: "Strength Training",
    description:
      "Build muscle, power, and discipline through structured strength workouts.",
  },
  {
    title: "HIIT",
    description:
      "High-intensity interval training designed to burn fat and boost endurance.",
  },
  {
    title: "Cross Training",
    description:
      "Full-body conditioning that improves strength, mobility, and stamina.",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching tailored specifically to your fitness goals.",
  },
  {
    title: "Boxing & Conditioning",
    description:
      "High-energy sessions combining boxing techniques with full-body workouts.",
  },
  {
    title: "Mobility & Recovery",
    description: "Improve flexibility, reduce injury risk, and recover faster.",
  },
];

const Program = () => {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide">
            Program & Classes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Training programs designed for every level - from beginners to
            experienced athletes.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-zinc-800 p-8 transition hover:-translate-y-1 hover:bg-zinc-700"
            >
              <h3 className="mb-4 text-xl font-semibold">{program.title}</h3>
              <p className="text-gray-300">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
