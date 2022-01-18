
var koneksi = require("../koneksi.js");
const Sequelize = require('sequelize');

const Jenis_Penunjang = koneksi.define('jenis_penunjang',   {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  autoIncrement: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biaya: {
  type: Sequelize.INTEGER,
  allowNull: false,
},},
{
  timestamps: true,
  freezeTableName: true
}
);


module.exports = Jenis_Penunjang;