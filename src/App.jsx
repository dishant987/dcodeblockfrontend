import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoComp from "./components/VideoComp";
import Image from "./components/Image";
import Footer from "./components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const App = () => {
  return (
    <div className="relative bg-black">
      <Header />

      {/* Hero Section */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Hero />
      </motion.div>

      {/* Image with Animation */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Image />
      </motion.div>

      {/* Video Component */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <VideoComp />
      </motion.div>

      {/* Second Image */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Image imgUrl={"/2.png"} />
      </motion.div>

      {/* Footer */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
