import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/img/Aerius_logo.png";
import man from "../assets/img/man.png";
import "./Home.css";
import top_left from "../assets/img/top_left.png";
import right from "../assets/img/right.png";
import smallPlanet from "../assets/img/smallplanet.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SignalCellularNull } from "@mui/icons-material";

const navItems = [
  {
    navBarText: "About",
    path: "#about",
  },
  {
    navBarText: "Products",
    path: "#products",
  },
  {
    navBarText: "Services",
    path: "#services",
  },
  {
    navBarText: "Github",
    path: "https://github.com/Aerius-Labs",
  },
  {
    navBarText: "Blog",
    path: "https://blog.aeriuslabs.org/",
  },
];

export const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "12vh",
            alignItems: "center",
            borderBottom: "1px solid #CF447F",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: 2,
            paddingRight: "7%",
            paddingLeft: "7%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "auto",
              alignItems: "center",
            }}
          >
            <div>
              <img src={logo} className="logo"></img>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Conthrax",
                color: "#CF447F",
                display: { xs: "none", sm: "block", lg: "block" },
              }}
            >
              Aerius Labs
            </Typography>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "55%",
              justifyContent: "flex-end",
              display: { xs: "none", sm: "none", lg: "block" },
            }}
          >
            {navItems.map((i) => (
              <Button
                color="inherit"
                key={navItems.indexOf(i.navBarText)}
                className="navbar-items"
                sx={{
                  fontFamily: "Unispace",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "1.3vw",
                  color: "#8d8d8d",
                  textTransform: "capitalize",
                  marginRight: "5%",
                }}
                href={i.path}
                target={
                  i.navBarText.toLowerCase() === "github" ||
                  i.navBarText.toLowerCase() === "blog"
                    ? "_blank"
                    : null
                }
              >
                {i.navBarText}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "block", lg: "none", color: "#8d8d8d" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
      </Box>

      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12vh",
          }}
        >
          <img src={top_left} className="left-top-planet" />
          <img src={right} className="right-planet" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "10vh",
          }}
        >
          <div className="head">
            <div className="home-heading">ZERO UNSEEN</div>
            <div className="home-description">
              Pioneering Invisible
              <br /> Integrity with <br />
              Zero Knowledge Proofs
            </div>
            <img src={smallPlanet} className="small-planet" />
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={man}
              style={{
                height: "35vw",
                position: "absolute",
                zIndex: "0",
              }}
              className="man hidden-on-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
