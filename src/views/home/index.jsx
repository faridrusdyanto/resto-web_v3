import React, { useEffect, useRef, useState } from "react";
import LeaderBoard from "./LeaderBoard";
// import LeaderBoard from "../components/home/LeaderBoard";
// import AboutSection from "../components/home/AboutSection";
// import WhyChooseUs from "../components/home/WhyChooseUs";
// import Homemenu from "../components/home/Homemenu";
// import Testimonialsection from "../components/home/Testimonialsection";

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
      {/* <AboutSection hendleRefMenu={hendleRefMenu} />
      <WhyChooseUs />
      <div ref={menuRef}>
        <Homemenu pagesWidth={width} />
      </div>
      <Testimonialsection /> */}
    </div>
  );
}
