import React, { useEffect, useRef, useState } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Homemenuitem from "./Homemenuitem";

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

  homemenu_menu: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  homemenu_explore: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },

  homemenu_data: {
    display: "flex",
    flexWrap: "wrap",
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
  others: {
    borderRadius: "20px",
    fontSize: ".7rem",
    textTransform: "lowercase",
    background: "white",
    height: "20px",
  },
}));

export default function Homemenu({ pagesWidth, Items, ...props }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const {
    homemenu,
    homemenu_data,
    homemenu_explore,
    homemenu_menu,
    titleMenu,
    others,
    row,
  } = useStyles(containerWidth);
  useEffect(() => {
    const getContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
    };

    // Call getContainerWidth initially and on window resize
    getContainerWidth();
    window.addEventListener("resize", getContainerWidth);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", getContainerWidth);
    };
  }, []);
  return (
    <div className={homemenu}>
      <div className={homemenu_explore}>
        <Typography className={homemenu_menu} component="h1">
          Menu
        </Typography>
        <div className={row}>
          <Typography className={titleMenu} variant="h2" component="h1">
            Makanan
          </Typography>
          <Button
            disableElevation
            className={others}
            color="secondary"
            endIcon={<ArrowRightAlt />}
            component={Link}
            to={"/foods"}
          >
            selengkapnya
          </Button>
        </div>
      </div>

      <div ref={containerRef} className={homemenu_data}>
        {[...Items].slice(0, 4).map((data, index) => (
          <Homemenuitem key={index} {...data} pagesWidth={pagesWidth} />
        ))}
      </div>
    </div>
  );
}
