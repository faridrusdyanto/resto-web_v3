import React, { useEffect, useRef, useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Homemenuitem from "../home/Homemenuitem";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

import {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
} from "../../services/actions/menu.actions";

const useStyles = makeStyles((theme) => ({
  homemenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  homemenu_data: {
    display: "flex",
    flexWrap: "wrap",
  },
  searchSection: (width) => ({
    height: "45px",
    display: "flex",
    width: `${width > 300 ? width : "70%"}px`,
    margin: "0 10px",
    border: "1px solid rgba(0,0,0,.1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "20px",
    "& input": {
      flex: 1,
      height: "100%",
      border: "none",
      outline: "none",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
    },
    "& input::placeholder": {
      fontSize: ".9rem",
    },
  }),
  searchIcon: {
    width: "40px",
    color: theme.palette.lightdark2,
    backgroundColor: "#FFF",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  row: (width) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: "0 7px",
    alignItems: "center",
    marginTop: "10px",
    "@media (min-width: 500px)": {
      width: `${width}px`,
    },
  }),
  titleMenu: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".9rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
  },
}));

function Menu(props) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const {
    homemenu,
    homemenu_data,
    searchSection,
    searchIcon,
    row,
    titleMenu,
    container,
  } = useStyles(containerWidth);
  console.log('====================================');
  console.log(containerWidth);
  console.log('====================================');
  const inputEl = React.useRef("");
  const [menus, setmenus] = useState([]);
  const [tabs, settabs] = useState([]);
  const [tabSelect, setTabSelect] = useState(1);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    props.getAllMenuAndCategory();
    props.getCategoryAndMenu();
  }, []);

  useEffect(() => {
    if (props.menus.menuCategories.length > 0) {
      const newMenu = [...props.menus.menuCategories];
      let findCategory = [...new Set(newMenu.map((x) => x.category))];
      let fic = newMenu.filter(
        (x) =>
          x.category?.toLowerCase() === findCategory[tabSelect]?.toLowerCase()
      );
      setmenus(fic);
      settabs(findCategory);
    }
  }, [props]);
  useEffect(() => {
    const getContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
    };
    getContainerWidth();
    window.addEventListener("resize", getContainerWidth);

    return () => window.removeEventListener("resize", getContainerWidth);
  }, []);

  const searchHandler = () => {
    if (inputEl.current.value !== "") {
      const newAllmeals = meals.filter((currentMeal) => {
        return Object.values(currentMeal)
          .join(" ")
          .toLowerCase()
          .includes(inputEl.current.value.toLowerCase());
      });
      setAllMeals(newAllmeals);
    } else {
      setAllMeals(meals);
    }
  };
  return (
    <div className={homemenu}>
      <div className={searchSection}>
        <div className={searchIcon}>
          <SearchIcon />
        </div>
        <input
          ref={inputEl}
          onChange={searchHandler}
          placeholder="Cari makanan yang kamu suka?"
        />
      </div>

      <div ref={containerRef} className={container}>
        <div className={row}>
          <Typography className={titleMenu} variant="h2" component="h1">
            Makanan
          </Typography>
        </div>
        <div className={homemenu_data}>
          {props.menus.menuCategories.map((data, index) => (
            <Homemenuitem key={index} {...data} pagesWidth={width} />
          ))}
        </div>
      </div>
      <div ref={containerRef} className={container}>
        <div className={row}>
          <Typography className={titleMenu} variant="h2" component="h1">
            Minuman
          </Typography>
        </div>
        <div className={homemenu_data}>
          {props.menus.menuCategories.map((data, index) => (
            <Homemenuitem key={index} {...data} pagesWidth={width} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menus: state.menuReducers,
});

const mapDispatchToProps = {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
