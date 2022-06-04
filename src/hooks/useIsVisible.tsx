import { useState, useEffect, RefObject } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
};

export const useIsVisible = (
  elementRef: RefObject<HTMLElement>,
  threshold = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            }
          });
        },
        { ...OPTIONS, threshold }
      );
      observer.observe(elementRef.current);
    }
  }, [elementRef]);

  return isVisible;
};
