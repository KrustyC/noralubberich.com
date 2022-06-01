import { useRef, useState, useEffect } from "react";
import { animated, config, useSprings } from "@react-spring/web";
import { useIsVisible } from "@/hooks/useIsVisible";
import { ACTIVITIES } from "@/utils/constants";

import { Activity } from "./Activity";

function getMarginTop(index) {
  if (index === 0) {
    return "mt-0";
  }

  if (index === 1) {
    return "mt-40";
  }

  if (index === 2) {
    return "mt-[-150px]";
  }
}

export const Activities = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref, 0.2);
  const [open, setOpen] = useState(false);

  const configs = ACTIVITIES.map((item, i) => ({
    delay: 400 * i,
    config: config.wobbly,
    from: { opacity: 0, x: 20 },
    to: {
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,

      transform: "translateY(0px)",
    },
  }));

  const springs = useSprings(3, configs);

  useEffect(() => {
    if (isVisible && !open) {
      setOpen(true);
    }
  }, [isVisible, open]);

  return (
    <section
      ref={ref}
      className="px-4 py-24 md:px-16 xl:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {springs.map(({ ...style }, i) => {
        const { label, pic, href } = ACTIVITIES[i];

        return (
          <animated.div key={i} style={style}>
            <animated.div>
              <Activity label={label} href={href} imgSrc={pic} />
            </animated.div>
          </animated.div>
        );
      })}
    </section>
  );
};
