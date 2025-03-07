import { motion } from "framer-motion";


const AnimatedSection = ({ children }) => {
  return (
    <motion.div

      initial={{ opacity: 0, y: 30, }}
      whileInView={{ opacity: 1, y: 0,  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
