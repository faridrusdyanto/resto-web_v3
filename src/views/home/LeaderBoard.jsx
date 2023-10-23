import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Button } from "@material-ui/core";
import {
  LibraryAddCheck,
  ListAlt,
  ArrowRightAlt,
  LocalMall,
} from "@material-ui/icons";

import homebg from "../../assets/home_bg.jpg";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  leaderBoard: {
    display: "flex",
    paddingRight: "79px",
    paddingLeft: "118px",
    backgroundImage: "url(" + homebg + ")",

    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundPosition: "1050px -100px",
    backgroundSize: "700px",
    height: "100vh",

    "@media (max-width: 900px)": {
      paddingLeft: "20px",
      paddingRight: "0px",
      backgroundPosition: "500px -260px",
    },
    "@media (max-width: 500px)": {
      height: "max-content",
      paddingLeft: "20px",
      paddingRight: "0px",
      backgroundPosition: "200px 0px",
    },
  },
  leaderBoard_left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  leaderBoard_left_h1: {
    lineHeight: "50px",
    fontFamily: "Inter, sans-serif",
    fontSize: "2.625rem",
    fontWeight: "bold",
    "@media (max-width: 500px)": {
      marginTop: "100px",
    },
  },
  leaderBoard_left_p: {
    fontFamily: "Inter, sans-serif",
    marginTop: "20px",
  },
  button: {
    borderRadius: "20px",
    width: "150px",
    marginTop: "30px",
    textTransform: "lowercase",
  },
  quicktip: {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    "@media (max-width: 400px)": {
      marginTop: "20px",
    },
  },
  quicktip_text: {
    fontSize: "0.9rem",
    lineHeight: "17px",
    fontFamily: "Inter, sans-serif",
    marginLeft: "7px",
  },
  quickTip_container: {
    display: "flex",
    gap: "20px",
    marginTop: "100px",
    flexWrap: "wrap",
    "@media (max-width: 400px)": {
      gap: "0px",
    },
  },
}));

export default function LeaderBoard({ hendleRefMenu }) {
  const {
    leaderBoard,
    leaderBoard_left,
    leaderBoard_left_h1,
    leaderBoard_left_p,
    button,
    quicktip,
    quicktip_text,
    left,
    quickTip_container,
  } = useStyles();

  const QuickTip = ({ Icon, quicktip_details1, quicktip_details2 }) => (
    <div className={quicktip}>
      {Icon}
      <Typography className={quicktip_text} component="p">
        {quicktip_details1}
        <br /> {quicktip_details2}
      </Typography>
    </div>
  );

  // const menuRef = useRef(null);

  // const handleNext = () => {
  //   if (menuRef.current) {
  //     menuRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div>
      <div className={leaderBoard}>
        <div className={leaderBoard_left}>
          <Typography
            className={leaderBoard_left_h1}
            variant="h2"
            component="h1"
          >
            Pesan Makanan Favorit Anda <br /> dengan Mudah
          </Typography>
          <Typography className={leaderBoard_left_p} component="p">
            Kami memberikan pelayanan terbaik. <br /> Anda dapat memesan
            sekarang!
          </Typography>
          <Button
            disableElevation
            className={button}
            variant="contained"
            color="primary"
            autoCapitalize="none"
            endIcon={<ArrowRightAlt />}
            onClick={hendleRefMenu}
          >
            our menu
          </Button>
          <div className={quickTip_container}>
            <QuickTip
              Icon={<LocalMall />}
              quicktip_details1="Pilih makanan favorit anda"
              quicktip_details2="lalu masukan keranjang!"
            />
            <QuickTip
              Icon={<ListAlt />}
              quicktip_details1="Cek pesanan anda pada keranjang"
              quicktip_details2="lalu isi form pesanan"
            />
            <QuickTip
              Icon={<LibraryAddCheck />}
              quicktip_details1="Checkout pesanan anda dan"
              quicktip_details2="lakukan pembayaran dikasir"
            />
          </div>
        </div>
        <div className={left}></div>
      </div>
    </div>
  );
}
