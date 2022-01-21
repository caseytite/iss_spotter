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
  fetchCoordsByIp(ip.ip, (error, data) => {
    if (error) {
      console.log("didnt work", error);
      return;
    }
    fetchFlyover(data, (error, data) => {
      if (error) {
        console.log("didnt work", error);
        return;
      }
      for (let each of data) {
        const date = new Date(0);
        date.setUTCSeconds(each.risetime);
        console.log(`Next pass at ${date} for ${each.duration} seconds`);
      }
    });
  });
});
