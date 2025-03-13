// framer-motion
import { AnimatePresence } from "framer-motion";

// router-dom
import { useLocation } from "react-router-dom";

// components
import Stairs from "./Stairs";

// framer-motion
import { motion } from "framer-motion";

function StairTransition() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={location}>
          <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-[#1c1c22] top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
