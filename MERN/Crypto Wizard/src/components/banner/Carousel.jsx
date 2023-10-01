import { makeStyles } from "@material-ui/styles";
import React from "react";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { useState } from "react";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
      display: "flex",
      alignItems: "center",
      marginTop:"3%"
    },
    carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const classes = useStyles();
  const { currency, symbol } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    720: {
      items: 4,
    },
  };
  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    // console.log(coin);
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}&nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14,203,109)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"} {coin?.price_change_percentage_24h}
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay="true"
        autoPlayInterval={1000}
        animationDuration={1000}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
};

export default Carousel;
