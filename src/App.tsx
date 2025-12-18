import { useEffect, useState } from "react";
import About from "./pages/About";
import CTA from "./pages/CTA";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Program from "./pages/Program";
import Trainers from "./pages/Trainers";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import PreLoader from "./pages/PreLoader";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <LayoutGroup>
        <AnimatePresence>{loading && <PreLoader />}</AnimatePresence>

        {!loading && (
          <>
            <Header />
            <Hero />
            <About />
            <Program />
            <Trainers />
            <Pricing />
            <CTA />
            <Footer />
          </>
        )}
      </LayoutGroup>
    </>
  );
}

export default App;
