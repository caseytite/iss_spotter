const { fetchMyIp, fetchCoordsByIp } = require("./iss");

fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);

    return;
  }

  // fetchCoordsByIp(ip.ip, (error, data) => {
  //   if (error) {
  //     console.log("didnt work", error);
  //     return;
  //   }
  //   console.log("worked", data);
  // });

  console.log("It worked! Returned IP:", ip);
});

// fetchCoordsByIp("75.156.51.27", (error, data) => {
//   if (error) {
//     console.log("didnt work", error);
//     return;
//   }
//   console.log("worked", data);
// });
