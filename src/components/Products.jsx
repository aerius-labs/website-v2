import React from "react";
// import planet from "../assets/img/about_planet.png";
import "./Products.css";
import ProductsCard from "./Card";

const product_data = [
  {
    name: "ZK Snap",
    discription: "Off-chain ballot privacy for DAOs",
    descFontSize: "20px",
    image: "zk-snap.svg",
    link:'/whitepaper',
  },
  {
    name: "Athena Finance",
    discription:
      "On-chain asset management for the Cosmos ecosystem, based on CosmWasm",
    descFontSize: "20px",
    image: "anthena_finance.png",
    link:null,
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
          <div className="products">PRODUCTS</div>
        </div>

        <div className="product-data">
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
