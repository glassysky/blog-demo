var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
app.use('/static', express.static(path.join(__dirname, 'public')))

// 创建服务端
app.listen(3000, function(){
  console.log("listen on port 3000");
})