import { useEffect, useRef, useState } from "react";
import LeaderBoard from "./LeaderBoard";
import AboutSection from "./AboutSection";
import Homemenu from "./Homemenu";

export default function Home() {
  const menuRef = useRef(null);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hendleRefMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <LeaderBoard hendleRefMenu={hendleRefMenu} />
      <AboutSection hendleRefMenu={hendleRefMenu} />
      <div ref={menuRef}>
        <Homemenu pagesWidth={width} />
      </div>
    </div>
  );
}
