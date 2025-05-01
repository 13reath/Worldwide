import Flag from "react-world-flags";

function CountryFlag({ countryCode }) {
  if (!countryCode || countryCode.length !== 2) return null;

  return (
    <Flag
      code={countryCode.toUpperCase()}
      style={{ width: "30px", height: "30px" }}
    />
  );
}

export default CountryFlag;
