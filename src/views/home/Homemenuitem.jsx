import React, { useRef } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import "../../App.css"

const useStyles = makeStyles((theme) => ({
  home_menu_item: {
    border: "1px solid #F2F2F2",
    height: "250px",
    borderRadius: "10px",
    position: "relative",
    cursor: "pointer",
    padding: "7px",
    marginRight: "5px",
    marginLeft: "5px",
    marginTop: "20px",
    transition: "all 0.6s ease-in-out",
    "&:hover": {
      background: theme.palette.primary.main,
      "& button": {
        background: "white",
      },
    },
  },
  hmi_img_div: {
    display: "flex",
    justifyContent: "center",
  },
  hmi_img: {
    height: "100px",
    width: "100px",
  },
  hmi_food_title: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".9rem",
    fontWeight: "bold",
    marginTop: "15px",
  },
  hmi_food_price: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".9rem",
    fontWeight: "bold",
  },
  hmi_food_subtitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".7rem",
    fontWeight: "bold",
    marginTop: "2px",
  },
  hmi_food_colories: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".7rem",
    fontWeight: "bold",
    color: "red",
    marginTop: "4px",
  },
  cart_button: {
    textTransform: "lowercase",
    fontFamily: "Inter, sans-serif",
    fontSize: ".7rem",
    fontWeight: "bold",
    borderRadius: "7px",
    height: "30px",
  },
  lower_div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35px",
    marginTop: "20px",
  },
}));

export default function Homemenuitem({
  image_path,
  title,
  sub_title,
  colories,
  price,
  pagesWidth,
}) {
  const ref = useRef();

  const {
    cart_button,
    hmi_food_colories,
    hmi_food_price,
    hmi_food_subtitle,
    hmi_food_title,
    hmi_img,
    hmi_img_div,
    home_menu_item,
    lower_div,
  } = useStyles();

  const handleClick = () => {
    ref.current.classList.add("send-to-cart");
    setTimeout(() => {
      ref.current.classList.remove("send-to-cart");
      onProductAdd();
    }, 1000);
  };

  return (
    <div
      className={home_menu_item}
      style={{
        width:
          pagesWidth <= 500
            ? pagesWidth / 2 - 34
            : pagesWidth <= 800
            ? (30 / 100) * pagesWidth
            : pagesWidth <= 1000
            ? (22 / 100) * pagesWidth
            : (15 / 100) * pagesWidth,
      }}
    >
      <span ref={ref} className="cart-item"></span>
      <div
        style={{
          height: "75%",
        }}
      >
        <div className={hmi_img_div}>
          <img className={hmi_img} src={image_path} />
        </div>
        <Typography className={hmi_food_title} variant="h2" component="h1">
          {title}
        </Typography>
        <Typography className={hmi_food_subtitle} variant="h2" component="h1">
          {sub_title}
        </Typography>
        <Typography className={hmi_food_colories} variant="h2" component="h1">
          {colories}
        </Typography>
      </div>
      <div className={lower_div}>
        <Typography className={hmi_food_price} variant="h2" component="h1">
          {price}
        </Typography>
        <Button
          disableElevation={true}
          color="primary"
          variant="contained"
          className={cart_button}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
