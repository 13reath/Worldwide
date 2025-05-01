import Flag from "react-world-flags";

function CountryFlag({ countryCode, width = 30, height = 30 }) {
  if (!countryCode || countryCode.length !== 2) return null;

  return <Flag code={countryCode.toUpperCase()} style={{ width, height }} />;
}

export default CountryFlag;
