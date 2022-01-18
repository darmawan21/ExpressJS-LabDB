const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transaksi_Penunjang = koneksi.define('transaksi_penunjang', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_transaksi_periksa: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Transaksi_Penunjang;