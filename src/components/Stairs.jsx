import { AnimatePresence, motion } from "framer-motion";

// variants
const stairsAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: "0%" },
};

// calculate the reverse index for stagged delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps

  return (totalSteps - index - 1) * 0.1;
};

function Stairs() {
  return (
    <>
      <AnimatePresence>
        {[...Array(6)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairsAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index),
              }}
              className="h-full w-full bg-white relative"
            ></motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
}

export default Stairs;
