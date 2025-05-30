"use client";

import { AnimatedImgFlexBasis } from "@/app/components/6_tailwindTricks/AnimatedImgFlexBasis";
import FancyBlurredBgc from "@/app/components/6_tailwindTricks/FancyBlurredBgc";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const dummyList = Array.from({ length: 120 });

const AnimatedImagesList = () => {
  return (
    <>
      <FancyBlurredBgc />
      <section
        className={`h-full grow flex flex-1  flex-wrap gap-4 justify-center py-10`}
      >
        {dummyList.map((_, i) => (
          <div key={i}>
            <AnimatedImgFlexBasis key={i} />
          </div>
        ))}
      </section>
    </>
  );
};

export default AnimatedImagesList;
