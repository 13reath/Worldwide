import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import Flag from "react-world-flags";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, country, date, notes } = currentCity ?? {};

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          {country && (
            <span>
              <Flag code={country} style={{ width: "30px", height: "30px" }} />
            </span>
          )}
          {cityName ?? "Loading..."}
        </h3>
      </div>

      {date && (
        <div className={styles.row}>
          <h6>You went to {cityName} on</h6>
          <p>{formatDate(date)}</p>
        </div>
      )}

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      {cityName && (
        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>
      )}

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
