import { useEffect, useState } from "react";

import TvContent from "./components/TvContent";
import Header from "./layout/Header";

import "./App.css";
function App() {
  const [scroll, setScroll] = useState(0);
  const [orientation, setOrientation] = useState();
  const [windowSize, setwindowSize] = useState(0);

  const windowsSize = () => {
    const width = window.innerWidth;
    if (width <= 576) {
      return "xs";
    }
    if (width > 576 && width <= 768) {
      return "s";
    }
    if (width > 768 && width <= 1024) {
      return "m";
    }
    if (width > 1024 && width <= 1440) {
      return "l";
    }
    if (width > 1440) {
      return "xl";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setOrientation(
      window.matchMedia("(orientation: portrait)").matches
        ? "portrait"
        : "landscape"
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

    window.addEventListener("load", () => setwindowSize(windowsSize));
    window.addEventListener("resize", () => setwindowSize(windowsSize));

    return () => {
      window.addEventListener("load", () => setwindowSize(windowsSize));
      window.addEventListener("resize", () => setwindowSize(windowsSize));
    };
  }, []);

  useEffect(() => {
  console.log(orientation);
  }, [orientation]);


  return (
    <div className="main">
      <Header scrollAmount={scroll} />
      <TvContent windowSize={windowSize}/>
    </div>
  );
}

export default App;
