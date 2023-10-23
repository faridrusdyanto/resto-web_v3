/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

import foodnapkin from "../../assets/foodnapkin.jpg";

const styles = {
  about_section: {
    display: "flex",
    width: "100%",
    minHeight: "70vh",
    height: "max-content",
    backgroundImage: `url(${foodnapkin})`,
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundPosition: "-200px",
    backgroundSize: "800px",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 750px)": {
      padding: "20px 20px",
      backgroundPosition: "-650px",
    },
  },
  about_section_left: {
    width: "50%",
    "@media (max-width: 900px)": {
      width: "30%",
    },
    "@media (max-width: 750px)": {
      width: "0%",
    },
  },
  about_section_right: {
    width: "50%",
    display: "block",
    padding: "30px 70px",
    "@media (max-width: 900px)": {
      padding: "30px 0px",
      width: "70%",
    },
    "@media (max-width: 750px)": {
      width: "100%",
    },
  },
  about_title: {
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  button: {
    borderRadius: "20px",
    width: "150px",
    marginTop: "30px",
    textTransform: "lowercase",
  },
  leaderBoard_left_h1: {
    lineHeight: "40px",
    fontFamily: "Inter, sans-serif",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },
  about_descriptions: {
    fontFamily: "Inter, sans-serif",
    marginTop: "15px",
  },
};

export default function AboutSection(props) {
  return (
    <div style={styles.about_section}>
      <div style={styles.about_section_left}></div>
      <div style={styles.about_section_right}>
        <Typography style={styles.about_title} component="h1">
          About
        </Typography>
        <Typography
          style={styles.leaderBoard_left_h1}
          variant="h2"
          component="h1"
        >
          Kami adalah restoran dengan kualitas terbaik
        </Typography>
        <Typography style={styles.about_descriptions} component="p">
          Restoran di Indonesia yang menggunakan bahan-bahan kami secara lokal,
          untuk merayakan momen spesial dalam hidup dengan menawarkan makanan,
          layanan, dan suasana terbaik
        </Typography>
        <Button
          disableElevation
          style={styles.button}
          variant="contained"
          color="warning"
          autoCapitalize="none"
          endIcon={<ArrowRightAlt />}
          onClick={props.hendleRefMenu}
        >
          our menu
        </Button>
      </div>
    </div>
  );
}
