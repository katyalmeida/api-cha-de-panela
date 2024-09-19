const pg = require("pg");

module.exports = {
  dialect: "postgres",
  dialectModule: pg,
  url: "postgresql://postgres:UpTMyBOEOZIfOQapQBMUUodkZeyhOFTd@postgres.railway.internal:5432/railway",

  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
// module.exports = {
//   dialect: "postgres",
//   host: "localhost",
//   username: "postgres",
//   password: "postgres",
//   database: "cha-panela",

//   define: {
//     timespamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
