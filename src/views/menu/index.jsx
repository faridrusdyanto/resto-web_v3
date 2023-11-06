import React, { useEffect, useState } from "react";
import { Typography, makeStyles, Tabs, Tab, Box } from "@material-ui/core";
import Homemenuitem from "../home/Homemenuitem";
import menudata from "../../utils/menudata";
import { connect } from "react-redux";

import {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
} from "../../services/actions/menu.actions";

const useStyles = makeStyles((theme) => ({
  homemenu: {
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 500px)": {
      padding: "50px 0px",
    },
  },
  leaderBoard_left_h1: {
    lineHeight: "40px",
    fontFamily: "Inter, sans-serif",
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginTop: "17px",
    textAlign: "center",
    marginBottom: "20px",
  },
  homemenu_menu: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  homemenu_explore: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  homemenu_data: {
    display: "flex",
    marginBottom: "30px",
    flexWrap: "wrap",
    paddingTop: "30px",
    "@media (max-width: 500px)": {
      paddingTop: "0px",
    },
  },
  button: {
    borderRadius: "20px",
    width: "150px",
    marginTop: "10px",
    textTransform: "lowercase",
    background: "white",
    border: "1px solid grey",
  },
}));

function Menu(props) {
  const { homemenu_menu, homemenu_explore, homemenu, homemenu_data } =
    useStyles();
  const [menus, setmenus] = useState([]);
  const [tabs, settabs] = useState([]);
  const [tabSelect, setTabSelect] = useState(1);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    props.getAllMenuAndCategory();
    props.getCategoryAndMenu();
  }, [])
  
  useEffect(() => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
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
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    const newMenu = [...props.menus.menuCategories];
    const findTab = [...tabs];
    let fic = newMenu.filter((x) => x.category === findTab[newValue]);
    setmenus(fic);
    setTabSelect(newValue);
  };

  return (
    <div className={homemenu}>
      <div className={homemenu_explore}>
        <Typography className={homemenu_menu} component="h1">
          Menu
        </Typography>
      </div>

      <Tabs
        value={tabSelect}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={index} />
        ))}
      </Tabs>

      {tabSelect === 0 && (
        <Box p={3}>
          <div className={homemenu_data}>
            {props.menus.menuCategories.map((data, index) => (
              <Homemenuitem key={index} {...data} pagesWidth={width} />
            ))}
          </div>
        </Box>
      )}
      {tabSelect === 1 && (
        <Box p={3}>
          <div className={homemenu_data}>
            {props.menus.menuCategories.map((data, index) => (
              <Homemenuitem key={index} {...data} pagesWidth={width} />
            ))}
          </div>
        </Box>
      )}
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
