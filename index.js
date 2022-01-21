const { fetchMyIp, fetchCoordsByIp, fetchFlyover } = require("./iss");

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);

//     return;
//   }

//   fetchCoordsByIp(ip.ip, (error, data) => {
//     if (error) {
//       console.log("didnt work", error);
//       return;
//     }
//     console.log("worked", data);
//   });

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIp("75.156.51.27", (error, data) => {
//   if (error) {
//     console.log("didnt work", error);
//     return;
//   }
//   console.log("worked", data);
// });
const latLong = { latitude: 48.4371, longitude: -123.3597 };

fetchFlyover(latLong, (error, data) => {
  if (error) {
    console.log("didnt work", error);
    return;
  }
  console.log("Fly over times are:", data);
});
