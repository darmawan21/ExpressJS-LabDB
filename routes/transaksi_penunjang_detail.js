var express = require('express');
var router = express.Router();
const axios = require('axios')
var JenisPenunjang = require('../models/jenis_penunjang');
var TransaksiPenunjang = require('../models/transaksi_penunjang');
var TransaksiPenunjangDetail = require('../models/transaksi_penunjang_detail');

router.get('/', function(req, res, next) {
	TransaksiPenunjangDetail.findAll({raw:true}).then( async data=> {
	
	  await Promise.all(data.map( async (item)=>{
		// baca Transaksi Periksa
		const transaksi_penunjang = await TransaksiPenunjang.findByPk(item.id_transaksi_penunjang);
	
		// baca Jenis Penunjang
		const jenis_penunjang = await JenisPenunjang.findByPk(item.id_jenis_penunjang);
	
		// update itemTampil
		item['biaya_transaksi_penunjang'] =  transaksi_penunjang.id_transaksi_penunjang;
		item['nama_jenis_penunjang'] = jenis_penunjang.nama;
    	item['biaya_jenis_penunjang'] = jenis_penunjang.biaya;

	  }));
	
	  res.json({
		status:true,
		pesan: "Berhasil Tampil",
		data:data
	  });
	
	}).catch ( err => {
	  res.json({
		status:false,
		pesan: "Gagal tampil: " + err.message,
		data:[]
	  })
	});
});

router.post('/',function(req,res,next){

    TransaksiPenunjangDetail.create(req.body).then( data=>{
        res.json({
            status:true,
            pesan:"Berhasil Tambah",
            data:data
        });
    }).catch( err=>{
        res.json({
            status: false,
            pesan: "Gagal Tambah: " + err.message,
            data:[]
        });
    });

});

router.put('/',function(req,res,next){
	TransaksiPenunjangDetail.update(req.body,{
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Ubah",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Ubah: " + err.message,
			data:[]
		});
	});
});

router.delete('/',function(req,res,next){
	TransaksiPenunjangDetail.destroy({
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Hapus",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Hapus: " + err.message,
			data:[]
		});
	});
});

module.exports = router;