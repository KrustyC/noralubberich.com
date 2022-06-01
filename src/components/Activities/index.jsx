import { useRef, useState, useEffect } from "react";
import { animated, config, useSprings } from "@react-spring/web";
import { useIsVisible } from "@/hooks/useIsVisible";
import { ACTIVITIES } from "@/utils/constants";

import { Activity } from "./Activity";

export const Activities = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref, 0.2);
  const [open, setOpen] = useState(false);

  const configs = ACTIVITIES.map((item, i) => ({
    delay: 500 * i,
    config: config.gentle,
    from: { opacity: 0, x: 50, y: 400 },
    to: {
      opacity: open ? 1 : 0,
      x: open ? 0 : 50,
      y: open ? 0 : 400,
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
    <section ref={ref} className="px-4 md:px-8 lg:px-60 grid grid-cols-1 md:grid-cols-2 gap-16">
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
