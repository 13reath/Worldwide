import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  const basePath =
    import.meta.env.MODE === "development" ? "/" : import.meta.env.BASE_URL;
  return (
    <Link to="/">
      <img
        src={`${basePath}logo.png`}
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
