/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Homemenuitem from "./Homemenuitem";
import menudata from "../../utils/menudata";

import { Button, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

const styles = {
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
    color:'#000',
    border: "1px solid grey",
  },
};

export default function Homemenu({ pagesWidth }) {
  return (
    <div style={styles.homemenu}>
      <div style={styles.homemenu_explore}>
        <Typography style={styles.homemenu_menu} component="h1">
          Menu
        </Typography>
        <Typography
          style={styles.leaderBoard_left_h1}
          variant="h2"
          component="h1"
        >
          Makanan Terlaris Kami
        </Typography>
      </div>

      <div style={styles.homemenu_data}>
        {[...menudata].slice(0, 4).map((data, index) => (
          <Homemenuitem key={index} {...data} pagesWidth={pagesWidth} />
        ))}
      </div>
      <Button
        disableElevation
        style={styles.button}
        variant="contained"
        autoCapitalize="none"
        endIcon={<ArrowRightAlt />}
        component={Link}
        to={"/allmeals"}
      >
        see all food
      </Button>
    </div>
  );
}
