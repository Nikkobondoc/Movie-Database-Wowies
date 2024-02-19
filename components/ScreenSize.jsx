import { useState, useEffect}  from "react";

// handle the dimension of the webpage when resizing (responsive)
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  // Destructuring assignment 
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


