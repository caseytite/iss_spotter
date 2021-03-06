const { nextISSFlyOver } = require("./iss_promised");

//

nextISSFlyOver().then((passtimes) => printPassTimes(passtimes));
// .catch((error) => {
//   console.log("it didnt work", error.message);
// });

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    // console.log(duration);
    console.log(
      `Next pass at ${datetime} for ${Math.floor(duration / 60)} minutes and ${
        duration % 60
      } seconds!`
    );
  }
};
