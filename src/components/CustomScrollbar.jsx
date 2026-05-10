import { useEffect, useState, useRef } from "react";

const CustomScrollbar = () => {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef(null);

  const updateThumb = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    const ratio = clientHeight / scrollHeight;
    const height = Math.max(ratio * clientHeight, 40);
    const maxScroll = scrollHeight - clientHeight;
    const top = maxScroll > 0 ? (scrollTop / maxScroll) * (clientHeight - height) : 0;

    setThumbHeight(height);
    setThumbTop(top);

    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 1200);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb, { passive: true });
    updateThumb();
    return () => {
      window.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 3,
        width: 5,
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: thumbTop,
          width: 5,
          height: thumbHeight,
          background: "#1e3a8a",
          borderRadius: 10,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
};

export default CustomScrollbar;
