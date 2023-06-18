import React from "react";
// import planet from "../asserts/img/about_planet.png";
import "./Products.css";
import ProductsCard from "./Card";

const product_data = [
  {
    name: "ZK Snap",
    discription: "Off-chain ballot privacy for DAOs",
    descFontSize: "20px",
    image: "zk-snap.svg",
  },
  {
    name: "Athena Finance",
    discription:
      "On-chain asset asset management for the Cosmos ecosystem, based on CosmWasm",
    descFontSize: "20px",
    image: "anthena_finance.png",
  },
];

const Products = () => {
  return (
    <div className="container3" id="products">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "auto",

            // marginBottom: "10%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Conthrax",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "43px",
              letterSpacing: "0.2em",
              color: "#CF447F",
              width: "100%",
              marginTop: "15%",
              marginBottom: "8%",
            }}
          >
            PRODUCTS
          </div>
        </div>

        <div
          style={{
            width: "70%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {product_data.map((i, index) => (
            <>
              <ProductsCard {...i} />
              {index !== product_data.length - 1 && (
                <div style={{ width: "5%" }}></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
