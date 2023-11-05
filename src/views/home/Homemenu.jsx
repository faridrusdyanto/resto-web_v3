import React, { useEffect } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import {ArrowRightAlt} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Homemenuitem from "./Homemenuitem";
import menudata from "../../utils/menudata";

const useStyles = makeStyles(() => ({
  homemenu: {
    padding: "50px 0px",
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
    justifyContent: "center",
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
    color: "#000",
    border: "1px solid grey",
  },
}));

export default function Homemenu({ pagesWidth, Items, ...props }) {
  useEffect(() => {
    console.log(props, 'props============')
  
    // return () => {
    //   props
    // }
  }, [props])
  
  const {
    button,
    homemenu,
    homemenu_data,
    homemenu_explore,
    homemenu_menu,
    leaderBoard_left_h1,
  } = useStyles();
  return (
    <div className={homemenu}>
      <div className={homemenu_explore}>
        <Typography className={homemenu_menu} component="h1">
          Menu
        </Typography>
        <Typography className={leaderBoard_left_h1} variant="h2" component="h1">
          Makanan Terlaris Kami
        </Typography>
      </div>

      <div className={homemenu_data}>
        {[...Items].slice(0, 4).map((data, index) => (
          <Homemenuitem key={index} {...data} pagesWidth={pagesWidth} />
        ))}
      </div>
      <Button
        disableElevation
        className={button}
        variant="contained"
        autoCapitalize="none"
        endIcon={<ArrowRightAlt />}
        component={Link}
        to={"/foods"}
      >
        see all food
      </Button>
    </div>
  );
}
