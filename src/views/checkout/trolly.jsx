import * as React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

import CartItem from "./CartItem";
import menudummy from "../../services/menu-dummy";
import Func from "../../utils/Func";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "200vh",

    fontFamily: "inter, sans-serif",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      "& $cart": {
        flex: 1,
        width: "100%",
      },
    },
  },
  cart: {
    position: "sticky",
    alignSelf: "flex-start",
    top: 0,
    maxHeight: "80vh",
    flex: 2.5,
    padding: "20px",
    "& h1": {
      color: theme.palette.lightdark3,
      fontSize: "1.3rem",
      fontFamily: "Mulish",
    },
  },
  Sub_total: {
    color: theme.palette.lightdark3,
    fontSize: ".9rem",
  },
  Sub_total_value: {
    color: theme.palette.lightdark3,
    fontSize: ".9rem",
  },
  amount_payable: {
    fontSize: ".9rem",
    fontWeight: "600",
  },
  amount_payable_value: {
    fontSize: ".9rem",
    fontWeight: "600",
  },
  submitbutton_section: {
    display: "flex",
    flexDirection: "column",
  },
  checkoutbtn: {
    backgroundColor: "green",
    // display: "flex",
    color: "#FFF",
    borderRadius: 50,
    width: "100%",
  },
  rowfooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "8px 0",
  },
  Sub_discont: {
    textDecoration: "line-through",
  },
}));

export default function Trolly() {
  const {
    root,
    Sub_total,
    Sub_total_value,
    amount_payable,
    amount_payable_value,
    cart,
    submitbutton_section,
    checkoutbtn,
    rowfooter,
    Sub_discont,
  } = useStyles();
  const [product, setproduct] = React.useState([...menudummy]);

  const onDecrement = (item) => {
    const index = product.findIndex((x) => x.id === item.id);
    const newProduct = [...product];

    if (newProduct[index].id) {
      newProduct[index].qty =
        newProduct[index].qty > 0 && newProduct[index].qty - 1;
    }
    setproduct(newProduct);
  };
  const onIncrement = (item) => {
    const index = product.findIndex((x) => x.id === item.id);
    const newProduct = [...product];

    if (newProduct[index].id) {
      newProduct[index].qty =
        newProduct[index].qty > 0 && newProduct[index].qty + 1;
    }
    setproduct(newProduct);
  };
  const ondetail = (item) => {};

  const onCheckout = () => {
    console.log("====================================");
    console.log("werwerwerw");
    console.log("====================================");
  };

  return (
    <div className={root}>
      <div className={cart}>
        <h1>Pesanan kamu</h1>

        <div
          style={{
            maxHeight: "50vh",
            overflowY: "auto",
            scrollbarWidth: "thin",
          }}
        >
          {product.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              decrement={() => onDecrement(item)}
              increment={() => onIncrement(item)}
              ondetail={() => ondetail(item)}
            />
          ))}
        </div>

        <div className={submitbutton_section}>
          <div className={rowfooter}>
            <Typography className={Sub_total}>Sub Total</Typography>
            <Typography className={Sub_total_value}>
              Rp{Func.idrCurrency(2000000)}
            </Typography>
          </div>
          <div className={rowfooter}>
            <Typography className={Sub_total}>Diskon</Typography>
            <Typography className={Sub_discont}>
              Rp{Func.idrCurrency(2000000)}
            </Typography>
          </div>
          <hr />
          <div className={rowfooter}>
            <Typography className={amount_payable}>Total harga</Typography>
            <Typography className={amount_payable_value}>
              Rp{Func.idrCurrency(200000)}
            </Typography>
          </div>
          <Button
            type="submit"
            disabled={false}
            variant="contained"
            color="secondary"
            disableElevation
            onClick={onCheckout}
            className={checkoutbtn}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
