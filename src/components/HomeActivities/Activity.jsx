import { useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";
import { SlideFromBottomOnMount } from "@/components/SlideFromBottomOnMount";

export const Activity = ({ imgSrc, label }) => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  console.log(`IS VISIBLE ${label}?`, isVisible);

  return (
    <div ref={elemRef} className="activity">
      <SlideFromBottomOnMount show={isVisible}>
        <div className="relative w-full h-full">
          <Image
            src={imgSrc}
            alt={label}
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <div className="absolute top-[300px] left-[50px]">
            <p className="underline uppercase font-bold text-4xl text-white">
              {label}
            </p>
          </div>
        </div>
      </SlideFromBottomOnMount>
    </div>
  );
};
