// import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { highlights } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const HighlightCard = ({ title, description, index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=" bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-secondary text-[14px] tracking-wider">0{index + 1}</p>

    <div className="mt-3">
      <h3 className="text-white font-bold text-[20px]">{title}</h3>
      <p className="mt-4 text-secondary tracking-wider text-[16px]">{description}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className=" mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>what I bring</p>
          <h2 className={styles.heroHeadText}>Highlights.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}>
        {highlights.map((highlight, index) => (
          <HighlightCard
          key={highlight.title}
          index= {index}
          {...highlight}/>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
