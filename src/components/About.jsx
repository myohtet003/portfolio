// import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"; 
import {SectionWrapper} from '../hoc';

const About = () => {

  const ServiceCard = ({index, title, icon}) => {
    return (
      <Tilt className=" xs:w-[250px] w-full">
        <motion.div
        variants={fadeIn("right", "spring", 0.5 *index, 0.75)}
        className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            // eslint-disable-next-line react/no-unknown-property
            options={{
              max:45,
              scale: 1,
              speed: 450
            }}
            className=" bg-tertiary rounded-[20px] py-5 px12 min-h-[280px]
            flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} 
            className=" w-16 h-16 object-contain" />
            <h3 className=" text-white text-[25px] font-bold text-center" > 
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a junior PHP and Laravel backend developer, I am passionate about
        honing my skills and gaining practical experience in building dynamic
        web applications. Eager to leverage my foundational knowledge in PHP and
        Laravel frameworks, I am excited to collaborate with seasoned
        professionals to tackle challenging projects and expand my understanding
        of backend development. My goal is to contribute effectively to a
        supportive team environment, while continuously learning and developing
        my skills to become a proficient backend developer.
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => {
            // console.log(service);
            return <ServiceCard key={service.title} index={index} {...service}/>
          })
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
