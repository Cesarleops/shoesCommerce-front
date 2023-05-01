import { useState } from "react";

export const Carousel = ({ children }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex === children.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(children.length - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div>
      <button onClick={next}>next</button>
      {children ? children[currentIndex] : ""}
      <button onClick={prev}>prev</button>
    </div>
  );
};
