const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");


const Transaksi_Penunjang = koneksi.define('Transaksi_Penunjang', {
}, {
    freezeTableName: true
}), Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
    biaya: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
},{
  freezeTableName: true
});

Transaksi_Penunjang.belongsTo(Transaksi_Periksa, {foreignKey: 'id_transaksi_periksa'});

module.exports = Transaksi_Penunjang;