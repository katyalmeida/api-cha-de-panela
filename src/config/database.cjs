const pg = require("pg");

module.exports = {
  dialect: "postgres",
  dialectModule: pg,
  url: "postgresql://postgres:tNpnDsNGMVKKpPFBlZHirqpvlAtsXxLi@sakura.proxy.rlwy.net:27500/railway",

  define: {
    timestamps: true,
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
