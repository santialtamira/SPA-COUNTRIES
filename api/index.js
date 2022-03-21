//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const Country = require('./src/models/Country.js');
const {Country, Activity} = require("./src/db.js")

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  // const repDeCba = await Country.create({name: "Cordoba", continent: "America", capital: "B jardin", subRegion: "America del sur", area: 60000, population: 4000000, id: "CBA", imgFlag: "https://flagcdn.com/bw.svg"})
  // const trekking = await Activity.create({name: "Trekking", dificulty: 3, duration: 90, season: "summer"})

  // repDeCba.setActivities(trekking);

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
