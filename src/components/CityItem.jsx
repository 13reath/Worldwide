/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Flag from "react-world-flags"; // Import the library
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, country, date } = city;

  return (
    <li className={styles.cityItem}>
      <Flag code={country} style={{ width: "30px", height: "30px" }} />
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
