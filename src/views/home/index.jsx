import { useEffect, useRef, useState } from "react";
import LeaderBoard from "./LeaderBoard";
import AboutSection from "./AboutSection";
import Homemenu from "./Homemenu";
import { connect } from "react-redux";
import {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
} from "../../services/actions/menu.actions";

function Home(props) {
  const menuRef = useRef(null);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    props.getAllMenuAndCategory();
    props.getCategoryAndMenu();

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
        <Homemenu pagesWidth={width} {...props} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
