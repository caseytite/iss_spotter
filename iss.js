//
const request = require("request");
const address = "https://api.ipify.org?format=json";
const location = "https://freegeoip.app/json/";
// const latLong = { latitude: 48.4371, longitude: -123.3597 };

const fetchMyIp = function (callback) {
  request(address, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  });
};

const fetchCoordsByIp = function (ip, callback) {
  request(location + ip, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const latitude = data.latitude;
    const longitude = data.longitude;

    callback(null, { latitude, longitude });
  });
};

const fetchFlyover = function (latLong, callback) {
  request(
    `https://iss-pass.herokuapp.com/json/?lat=${latLong.latitude}&lon=${latLong.longitude}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      }
      if (response.statusCode !== 200) {
        const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
        callback(Error(msg), null);
        return;
      }
      let data = JSON.parse(body);
      callback(null, data.response);
    }
  );
};

//

module.exports = { fetchMyIp, fetchCoordsByIp, fetchFlyover /*nextFlyOver*/ };
