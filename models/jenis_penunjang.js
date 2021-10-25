const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");


const Jenis_Penunjang = koneksi.define('Jenis_Penunjang', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
});


module.exports = Jenis_Penunjang;