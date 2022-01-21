const request = require("request");
const address = "https://api.ipify.org?format=json";
const location = "https://freegeoip.app/json/";

const fetchMyIp = function(callback) {
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
    // console.log(error, data);
    callback(null, data);
  });
};

const fetchCoordsByIp = function(ip, callback) {
  //
  request(location + ip, (error, response, body) => {
    //
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

    // console.log(error, data);
    callback(null, { latitude, longitude });
  });
};

// }
module.exports = { fetchMyIp, fetchCoordsByIp };
