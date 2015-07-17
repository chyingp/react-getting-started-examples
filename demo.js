var express = require('express');
var app = express(); // the main app
// var admin = express(); // the sub app

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath); // /admin
//   res.send('Admin Homepage');
// });

// app.use('/admin', admin); // mount the sub app

// app.listen(8989);

// var app = express();

// app.route('/admin')
// 	.get('/', function(req, res, next) {
// 		// console.log(admin.mountpath); // /admin
// 	 	res.send('Admin Homepage');
// 	});

// app.use('/', function(req, res, next){
// 	res.send('hello');
// });

// app.use('/admin', function(req, res){
// 	res.send('admin');
// });
// // 
// // app.all('/admin', function(req, res){
// // 	res.send('admin');
// // });
// // 


// app.listen(8989);

// var express = require('express');
// var app = express();


// app.use(function(req, res, next){

// });
// app.listen(1337);
// 
app.get('/', function(req, res, next){
	res.send('hello');
});
app.listen(1337);