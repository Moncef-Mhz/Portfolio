import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constant";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <img src={technology.icon} className="w-20 h-20 " />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
