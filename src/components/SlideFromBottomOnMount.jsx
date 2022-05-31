import { animated, config, useTransition } from "react-spring";

export const SlideFromBottomOnMount = ({ className = "", show, children }) => {
  const transition = useTransition(show, {
    config: config.molasses,
    from: { y: 250, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div className={className} style={style}>
            {children}
          </animated.div>
        ) : null
      )}
    </>
  );
};
