import * as React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

import CartItem from "./CartItem";
import Func from "../../utils/Func";
import { connect } from "react-redux";
import {
  getListTrolly,
  addEditDelTrolly,
  increamentdecreamentTrolly,
} from "../../services/actions/trolly.action";
import { PlusOne, Add } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
  row: (width) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: "0 7px",
    alignItems: "flex-end",
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
    marginRight: -15,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "80%",
    marginTop: "20%",
    "& h3": {
      textAlign: "center",
      color: "rgba(0,0,0,0.3)",
      fontFamily: "Inter, sans-serif",
    },
  },
}));

function Trolly(props) {
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
    row,
    titleMenu,
    others,
    centered,
  } = useStyles();

  React.useEffect(() => {}, []);

  const onIncrement = (item) => {
    const { trollyItems } = props.trolly;
    let dataSelect = [];

    const index = trollyItems?.product?.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      trollyItems.product[index].qty += 1;
      dataSelect = trollyItems.product;
    }
    props.increamentdecreamentTrolly(dataSelect, true);
  };

  const onDecrement = (item) => {
    const { trollyItems } = props.trolly;
    let dataSelect = [];

    const index = trollyItems?.product?.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      if (trollyItems.product[index].qty > 1) {
        trollyItems.product[index].qty -= 1;
        dataSelect = trollyItems.product;
      } else {
        // Remove the item from the array if quantity is zero or negative
        trollyItems.product.splice(index, 1);
        dataSelect = trollyItems.product;
      }
    }
    props.increamentdecreamentTrolly(dataSelect, false);
  };
  const ondetail = (item) => {};

  const onCheckout = () => {
    if (props.trolly?.trollyItems?.customer === undefined) {
      //add data customer
    } else {
      //go to checkout
    }
  };

  console.log(props.trolly?.trollyItems);

  return (
    <div className={root}>
      <div className={cart}>
        <div className={row}>
          <Typography className={titleMenu} variant="h2" component="h1">
            Pesanan
          </Typography>
          <Button
            disableElevation
            className={others}
            color="secondary"
            startIcon={<Add />}
            component={Link}
            to={"/foods"}
          >
            Tambah makanan
          </Button>
        </div>

        {props.trolly?.trollyItems?.product === undefined ? (
          <div className={`${centered}`}>
            <h3>Kamu belum memilih makanan</h3>
          </div>
        ) : (
          <>
            <div
              style={{
                maxHeight: "50vh",
                overflowY: "auto",
                scrollbarWidth: "thin",
              }}
            >
              {[...props.trolly?.trollyItems?.product].map((item, index) => (
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
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  trolly: state.trollyReducers,
});

const mapDispatchToProps = {
  getListTrolly,
  addEditDelTrolly,
  increamentdecreamentTrolly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trolly);
