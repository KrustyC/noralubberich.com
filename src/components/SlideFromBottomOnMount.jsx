import { animated, useTransition } from "react-spring";

export const SlideFromBottomOnMount = ({ show, children }) => {
  const transition = useTransition(show, {
    from: { y: 350, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  return (
    <>
      {transition((style, item) =>
        item ? <animated.div className="relative h-full w-full" style={style}>{children}</animated.div> : null
      )}
    </>
  );
};
