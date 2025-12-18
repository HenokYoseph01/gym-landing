import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors ${
        isScrolled ? "bg-zinc-950/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="fixed top-0 left-0 z-50 w-full bg-transparent"
      >
        <div className="mx-auto flex h-20 max-w-10xl items-center justify-between px-6">
          <motion.div
            layoutId="logo"
            className="flex items-center gap-3 text-white"
          >
            <img
              src="/logo.jpg"
              alt="Gym Logo"
              className="h-10 w-10 object-contain"
            />
            <motion.span
              animate={{
                opacity: isScrolled ? 0 : 1,
                width: isScrolled ? 0 : "auto",
                marginLeft: isScrolled ? 0 : 8,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap text-lg font-bold uppercase tracking-wide"
            >
              Addis Fitness
            </motion.span>
          </motion.div>

          <button className="hidden rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700 md:block">
            Join Now
          </button>
        </div>
      </motion.header>
    </header>
  );
};

export default Header;
