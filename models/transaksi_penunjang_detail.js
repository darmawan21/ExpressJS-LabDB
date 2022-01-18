const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");


const Transaksi_Penunjang_Detail = koneksi.define('transaksi_penunjang_detail', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_transaksi_penunjang: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_jenis_penunjang: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hasil: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biaya: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Transaksi_Penunjang_Detail;