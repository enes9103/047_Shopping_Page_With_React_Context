import React from "react";
import styles from "./Home.module.css";
import Items from "./HomeComponent/Items";
import Slider from "./HomeComponent/Slider";


const Home = () => {

  return (
    <div className={styles.home}>
      <div className={styles.items}>
      <div className={styles.slider}>
        <Slider />
      </div>
        <Items />
      </div>
    </div>
  );
};

export default Home;
