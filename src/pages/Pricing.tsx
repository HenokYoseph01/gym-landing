import { motion } from "framer-motion";

const plans: {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}[] = [
  {
    name: "Basic",
    price: "Starting from 2,000 ETB / month",
    features: [
      "Gym access",
      "Strength & cardio equipment",
      "Locker room access",
    ],
  },
  {
    name: "Standard",
    price: "Starting from 3,500 ETB / month",
    features: ["Everything in Basic", "Group classes", "Trainer guidance"],
    highlighted: true,
  },
  {
    name: "Personal Training",
    price: "Custom pricing",
    features: [
      "One-on-one coaching",
      "Personalized workout plans",
      "Progress tracking",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide">
            Membership Plans
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Flexible plans designed to fit your goals and lifestyle.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-red-600 text-white scale-105"
                  : "bg-zinc-800"
              }`}
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>

              <p className="mb-6 text-lg font-medium">{plan.price}</p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-xl py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-black/20 hover:bg-black/30"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
