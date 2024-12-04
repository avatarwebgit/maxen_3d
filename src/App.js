import { useEffect, useState } from "react";

import TvContent from "./components/TvContent";
import Header from "./layout/Header";

import "./App.css";
function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="main">
      <Header scrollAmount={scroll}/>
      <TvContent />
    </div>
  );
}

export default App;
