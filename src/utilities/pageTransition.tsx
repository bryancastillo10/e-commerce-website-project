import { FC } from "react";
import { motion } from "framer-motion";

const pageTransition = (Component: FC) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed z-[1000] top-0 left-0 w-full h-screen origin-bottom bg-[hsla(202,100%,35%,0.8)] "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      />
      <motion.div
        className="fixed z-[1000] top-0 left-0 w-full h-screen origin-top bg-[hsla(202,100%,35%,0.8)] "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      />
    </>
  );
};

export default pageTransition;
