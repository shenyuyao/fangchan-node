var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'project',
	port:3307
}) 


app.post('/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `select * from loupan where fenlei=${req.body.fenlei}`
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})


app.post('/detail/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `select * from loupan where id=${req.body.id}`
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})


app.post('/newxq/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `select * from news where id=${req.body.id}`
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})

app.get('/news/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = 'select * from news'
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})

app.listen(3000,function(){
	console.log('ok')
})
