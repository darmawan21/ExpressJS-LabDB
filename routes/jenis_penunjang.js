var express = require('express');
var router = express.Router();

var Jenis_Penunjang = require('../models/jenis_penunjang');

router.get('/',function(req,res,next){
	Jenis_Penunjang.findAll().then( data=>{
		res.json({
			status:true,
			pesan:"Berhasil Tampil",
			data:data
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});

router.post('/',function(req,res,next){

    Jenis_Penunjang.create(req.body).then( data=>{
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
	Jenis_Penunjang.update(req.body,{
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
	Jenis_Penunjang.destroy({
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

router.get('/options',function(req,res,next){
	Jenis_Penunjang.findAll().then( data=>{

		var options = data.map( (item)=>{
			return {
				id:item.id, 
				value:item.nama+ " - "+item.biaya,
				data:item
			};
		});

		res.json({
			status:true,
			pesan:"Berhasil Tampil Options",
			data: options
		});

	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});

module.exports = router;