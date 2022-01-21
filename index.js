const {
  fetchMyIp,
  fetchCoordsByIp,
  fetchFlyover,
  nextFlyOver,
} = require("./iss");
//-----------all 3 working-------------

fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);

    return;
  }
  //inside fetch ip
  fetchCoordsByIp(ip.ip, (error, data) => {
    if (error) {
      console.log("didnt work", error);
      return;
    }
    // console.log("worked", data);
    // inside fetch coords

    fetchFlyover(data, (error, data) => {
      if (error) {
        console.log("didnt work", error);
        return;
      }

      for (let each of data) {
        const date = new Date(0);
        date.setUTCSeconds(each.risetime);
        console.log(`Next pass at ${date} for ${each.duration} seconds`);
        // console.log(each);
      }
      // console.log("Fly over times are:", data);
    });
  });
  // console.log("It worked! Returned IP:", ip);
});

//------------------------------

// fetchCoordsByIp("75.156.51.27", (error, data) => {
//   if (error) {
//     console.log("didnt work", error);
//     return;
//   }
//   console.log("worked", data);
// });
// const latLong = { latitude: 48.4371, longitude: -123.3597 };

// fetchFlyover(latLong, (error, data) => {
//   if (error) {
//     console.log("didnt work", error);
//     return;
//   }
//   console.log("Fly over times are:", data);
// });
