import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div>
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide">
              More than a Gym
            </h2>
            <p className="mb-4 text-gray-300">
              We're a communty built of discipline, passion, consistency and
              hardwork. Every session is designed to push limits and build
              confidence
            </p>
            <p className="mb-8 text-gray-300">
              No matter your goal, you'll be training alongside people who
              refuse to quit
            </p>

            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-bold text-red-500">10+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-500">1K+</p>
                <p className="text-sm text-gray-400">Members Trained</p>
              </div>
            </div>
          </div>

          <div className="relative h-100 overflow-hidden rounded-2xl">
            <img
              src="/gym_look.jpg"
              alt="Gym Training"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
