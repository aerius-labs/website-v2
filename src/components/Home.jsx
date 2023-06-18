import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../asserts/img/Aerius_logo.png";
import man from "../asserts/img/man.png";
import "./Home.css";
import top_left from "../asserts/img/top_left.png";
import right from "../asserts/img/right.png";
import smallPlanet from "../asserts/img/smallplanet.png";

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
  return (
    <div className="container" style={{ height: "100%", width: "100%" }}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              height: "12vh",
              alignItems: "center",
              borderBottom: "1px solid #CF447F",
              position: "fixed",
              top: "0",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "30%",
                alignItems: "center",
              }}
            >
              <div>
                <img src={logo}></img>
              </div>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontFamily: "Conthrax", color: "#CF447F" }}
              >
                Aerius Labs
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50%",
                justifyContent: "flex-end",
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
                    fontSize: "2vh",
                    color: "#8d8d8d",
                    textTransform: "capitalize",
                    marginLeft: "5%",
                  }}
                  href={i.path}
                >
                  {i.navBarText}
                </Button>
              ))}
            </div>
          </AppBar>
        </Box>
      </div>
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
          <img src={top_left} style={{ width: "12%", height: "12%" }} />
          <img
            src={right}
            style={{
              width: "15%",
              height: "15%",
              marginRight: "35%",
            }}
          />
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
          <div style={{ width: "60%", marginLeft: "15vw" }}>
            <div
              style={{
                fontFamily: "Conthrax",

                color: "#F1227A",
                height: "10vh",
                fontWeight: "600",
                fontSize: "8vh",
                letterSpacing: "0.5vw",
              }}
            >
              ZERO UNSEEN
            </div>
            <div
              style={{
                marginTop: "2vh",
                fontFamily: "Conthrax",
                color: "white",
                fontWeight: "600",
                fontSize: "3.5vh",
                letterSpacing: "0.4vw",
                wordSpacing: "1.5vw",
              }}
            >
              Pioneering Invisible
              <br /> Integrity with <br />
              Zero Knowledge Proofs
            </div>
            <img src={smallPlanet} style={{ marginLeft: "12%" }} />
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
                height: "70vh",
                marginTop: "5vh",
                position: "absolute",
                zIndex: "1",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
