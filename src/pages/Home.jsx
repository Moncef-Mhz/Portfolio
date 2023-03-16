import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div className="w-5 h-5 rounded-full bg-[#915EFF] " />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hey! I am <span className="text-[#915EFF]	">Moncef</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I am a software developer since 2018 <br />
            web & mobile applications
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
