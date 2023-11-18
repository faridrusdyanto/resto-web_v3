import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Func from "../../utils/Func";
import Crypto from "../../utils/crypto";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    "& > :nth-child(1)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& > :nth-child(2)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    },
  },
  cart_items_button: {
    display: "flex",

    "& button": {
      backgroundColor: theme.palette.green,
      border: "none",
      height: "25px",
      width: "25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      color: "#FFF",
    },
    "& h1": {
      fontWeight: "500",
      fontSize: "14px !important",
      height: "25px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderTop: `1px solid #dedede`,
      borderBottom: `1px solid #dedede`,
    },
  },
  cart_foodname: {
    fontFamily: "Mulish",
    fontWeight: "800",
    fontSize: "14px",
  },
  cart_desc: {
    fontSize: "12px",
    color: "red",
    cursor: "pointer",
    fontWeight: "500",
  },
  cart_price: {
    color: theme.palette.lightdark2,
    fontSize: "0.8rem",
    marginBottom: "8px",
    textAlign: "right",
  },

  hmi_img_div: {
    backgroundColor: "rgba(0,0,0,.2)",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px",
    borderRadius: "100px",
    display: "flex",
  },
  hmi_img: {
    height: "70px",
    width: "70px",
    borderRadius: "100px",
  },
  rowItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  itembody: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "0 5px",
  },
}));

export default function CartItem({ increment, decrement, ondetail, ...props }) {
  const { category_name, image, price, product_name, qty } = props;
  const {
    root,
    cart_items_button,
    cart_foodname,
    cart_price,
    hmi_img_div,
    hmi_img,
    rowItem,
    itembody,
    cart_desc,
  } = useStyles();

  const decryptedImageSrc = Crypto.decryptImg(image);

  return (
    <div className={`${root} ${rowItem}`}>
      <div className={hmi_img_div}>
        <img className={hmi_img} src={decryptedImageSrc} />
      </div>
      <div className={rowItem}>
        <div className={itembody}>
          <Typography className={cart_foodname}>{product_name}</Typography>
          <Typography className={cart_desc}>{category_name}</Typography>
        </div>
        <div>
          <Typography className={cart_price}>
            {`Rp${Func.idrCurrency(price)}`}
          </Typography>
          <div className={cart_items_button}>
            <button onClick={decrement}>-</button>
            <Typography variant="h1">{qty}</Typography>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
