import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Onboarding() {
  const fades = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 2, staggerChildren: 5 },
    },
  };

  //onboarding

  const [onboarding, setOnboarding] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnboarding(true), 3000);
  }, []);

  return (
    <>
      {onboarding && (
        <motion.div
          className="parent"
          variants={fades}
          initial="hidden"
          animate="show"
        >
          <motion.div className="onboard-container1" variants={fades}>
            <div className="onboard1">
              <p>Take a look around our interactive map</p>
              <p>to get started.</p>
            </div>
          </motion.div>
          <motion.div className="onboard-container2" variants={fades}>
            <div className="onboard-arrow2"></div>
            <div className="onboard2">
              <p>Or, search for a location here.</p>
            </div>
          </motion.div>
          <motion.div className="onboard-container3" variants={fades}>
            <div className="onboard-arrow3"></div>
            <div className="onboard3">
              <p>Places with reviews </p>
              <p>in the area you're browsing</p>
              <p>will show here.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
