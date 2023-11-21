import React, { useRef } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import "../../App.css";
import Crypto from "../../utils/crypto";
import Func from "../../utils/Func";

const useStyles = makeStyles((theme) => ({
  home_menu_item: (width) => ({
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
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      width: "47.2%",
    },
    "@media only screen and (min-width: 120px) and (max-width: 320px)": {
      width: "46.8%",
    },
  }),
  hmi_img_div: {
    display: "flex",
    justifyContent: "center",
    margin: -7,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  hmi_img: {
    height: "100px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    width: "100%",
  },
  hmi_food_title: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".8rem",
    fontWeight: "bold",
    marginTop: "15px",
    width: "100%",
  },
  hmi_food_price: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".7rem",
    fontWeight: "bold",
  },
  hmi_food_subtitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: ".8rem",
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
    "@media only screen and (min-width: 120px) and (max-width: 320px)": {
      width: "10px",
      height: "20px",
      fontSize: ".6rem",
    },
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
  image,
  product_name,
  product_desc,
  category_name,
  price,
  pagesWidth,
  onClick = () => {},
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
  } = useStyles(pagesWidth);

  const handleClick = () => {
    onClick();
    // ref.current.classList.add("send-to-cart");
    // setTimeout(() => {
    //   ref.current.classList.remove("send-to-cart");
    //   onClick();
    // }, 1000);
  };
  const decryptedImageSrc = Crypto.decryptImg(image); // Decrypt the image source

  return (
    <div className={home_menu_item}>
      <span ref={ref} className="cart-item"></span>
      <div
        style={{
          height: "75%",
        }}
      >
        <div className={hmi_img_div}>
          <img className={hmi_img} src={decryptedImageSrc} />
        </div>
        <Typography className={hmi_food_title} variant="h2" component="h1">
          {product_name}
        </Typography>
        <Typography className={hmi_food_subtitle} variant="h2" component="h1">
          {product_desc}
        </Typography>
        <Typography className={hmi_food_colories} variant="h2" component="h1">
          {category_name}
        </Typography>
      </div>
      <div className={lower_div}>
        <Typography className={hmi_food_price} variant="h2" component="h1">
          {"Rp" + Func.idrCurrency(price)}
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
