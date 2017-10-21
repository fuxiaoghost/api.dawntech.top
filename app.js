var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var index = require('./routes/index');
var app = express();


// parse application/json
app.use(bodyParser.json());                        
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 错误处理
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Error!!!');
});

// 静态文件
app.use(express.static(path.join(__dirname, 'public')));


// 路由
app.get('/home/cycle', index.cycle);

// 开启监听
var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
});