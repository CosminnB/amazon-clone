import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image  */}
      {/* Product */}
      {/* You can map from a data object from a database to create products */}
      <div className="home__row">
        <Product
          id={12345}
          title="JBL Boombox Bluetooth Speaker"
          price={279.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71R1nO2uW0L._AC_SX522_.jpg"
        />
        <Product
          id={123456}
          title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
          price={264.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={19271}
          title="Enameled Cast Iron Dutch Oven - 6-Quart"
          price={44.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71ptfznkI4L._AC_SX522_.jpg"
        />
        <Product
          id={1593}
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones"
          price={278.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71a5XAAbzbL._AC_SY450_.jpg"
        />
        <Product
          id={15832}
          title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
          price={399.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SX342_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1572}
          title="TCL 32S327 32-Inch 1080p ROKU Smart LED TV (2018 Model)"
          price={149}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Ut6ZxFbpL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
