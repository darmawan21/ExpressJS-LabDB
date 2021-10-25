const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");
const Jenis_Penunjang = require('./jenis_penunjang.js');
const Transaksi_Penunjang = require('./transaksi_penunjang.js');


const Transaksi_Penunjang_Detail = koneksi.define('Transaksi_Penunjang_Detail', {
  hasil: {
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

Transaksi_Penunjang_Detail.belongsTo(Transaksi_Penunjang, {foreignKey: 'id_transaksi_penunjang'});
Transaksi_Penunjang_Detail.belongsTo(Jenis_Penunjang, {foreignKey: 'id_jenis_penunjang'});

module.exports = Transaksi_Penunjang_Detail;