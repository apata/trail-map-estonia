import React, { ReactNode, useEffect, useRef } from "react";

const FullScreenContainer = (props: { children: ReactNode }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeToWindowSize = () => {
      if (container.current) {
        container.current.style.height =
          document.documentElement.clientHeight + "px";
      }
    };
    resizeToWindowSize();

    window.addEventListener("resize", resizeToWindowSize);
    window.addEventListener("orientationchange", resizeToWindowSize);
    return () => {
      window.removeEventListener("resize", resizeToWindowSize);
      window.removeEventListener("orientationchange", resizeToWindowSize);
    };
  }, []);

  return (
    <div ref={container} style={{ maxHeight: "100vh" }}>
      {props.children}
    </div>
  );
};

export default FullScreenContainer;
