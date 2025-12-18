import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950"
    >
      <motion.div layoutId="logo" className="flex items-center gap-4">
        <img src="/logo.jpg" alt="Logo" className="h-14 w-14" />
        <span className="text-2xl font-bold uppercase tracking-widest text-white">
          Addis Fitness
        </span>
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
