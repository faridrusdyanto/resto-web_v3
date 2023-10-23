/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import {
  LibraryAddCheck,
  ArrowRightAlt,
  ListAlt,
  LocalMall,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import homebg from "../../assets/home_bg.jpg";

const styles = {
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
    backgroundColor: "red",
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
};

export default function LeaderBoard({ hendleRefMenu }) {
  const QuickTip = ({ Icon, quicktip_details1, quicktip_details2 }) => (
    <div style={styles.quicktip}>
      {Icon}
      <Typography style={styles.quicktip_text} component="p">
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
      <div style={styles.leaderBoard}>
        <div style={styles.leaderBoard_left}>
          <Typography
            style={styles.leaderBoard_left_h1}
            variant="h2"
            component="h1"
          >
            Pesan Makanan Favorit Anda <br /> dengan Mudah
          </Typography>
          <Typography style={styles.leaderBoard_left_p} component="p">
            Kami memberikan pelayanan terbaik. <br /> Anda dapat memesan
            sekarang!
          </Typography>
          <Button
            disableElevation
            style={styles.button}
            variant="contained"
            color="warning"
            autoCapitalize="none"
            endIcon={<ArrowRightAlt />}
            onClick={hendleRefMenu}
          >
            our menu
          </Button>
          <div style={styles.quickTip_container}>
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
        <div style={styles.left}></div>
      </div>
    </div>
  );
}
