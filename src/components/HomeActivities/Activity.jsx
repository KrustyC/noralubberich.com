import { useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";
import { SlideFromBottomOnMount } from "@/components/SlideFromBottomOnMount";

export const Activity = ({ imgSrc, blurImageSrc, label }) => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  return (
    <div ref={elemRef} className="activity">
      <SlideFromBottomOnMount
        className="relative h-full w-full"
        show={isVisible}
      >
        <Image
          src={imgSrc}
          alt={label}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute top-[300px] left-[50px]">
          <p className="underline uppercase font-bold text-4xl text-white">
            {label}
          </p>
        </div>
      </SlideFromBottomOnMount>
    </div>
  );
};
