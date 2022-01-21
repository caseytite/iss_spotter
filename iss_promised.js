const request = require("request-promise-native");
const url = "https://api.ipify.org?format=json";
const location = "https://freegeoip.app/json/";

const fetchMyIP = function () {
  return request(url);
};
const fetchCoordsByIp = function (body) {
  const ip = JSON.parse(body).ip;
  return request(location + ip);
};
const fetchISSFlyOvers = function (body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};
const nextISSFlyOver = function (body) {
  //
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOvers)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSFlyOver,
};
