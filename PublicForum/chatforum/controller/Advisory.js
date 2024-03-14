const { getCode, getName } = require("country-list");

const Advisory = async (req, res) => {
  let CountryName = req.body.countryName;
  CountryName = CountryName.toLowerCase();
  let countryCode;
  countryCode = getCode(CountryName);
  console.log(countryCode);

  const response = await fetch(
    `https://www.travel-advisory.info/api?countrycode=${countryCode}`
  );
  if (response.ok) {
    const data = await response.json();
    res.json({ msg: data });
  }
  // console.log(response);
  // res.json({ msg: countryCode });
};

module.exports = { Advisory };
