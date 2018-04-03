const express = require('express');
const app = express();
const port = 3011;

app.use(express.static('public'));
app.listen(port,function(){
	console.log('server start sucessfully',+port);
})


