var express = require('express'),
	app = express();

app.set('view engine', 'hbs');  // 用hbs作为模版引擎
app.set('views', __dirname + '/views'); // 模版所在路径
app.use(express.static(__dirname + '/public'));

app.use('/js/build/router-basic.js', function(req, res, next){

	var browserify = require('browserify');
	browserify()
		.add(__dirname + '/public/js/router-basic.js')
		.transform(require('reactify'))
		.bundle()
		.pipe(res);
});

app.use('/js/build/server-render.js', function(req, res, next){

	var browserify = require('browserify');
	browserify()
		.add(__dirname + '/public/js/server-render.js')
		.transform(require('reactify'))
		.bundle()
		.pipe(res);
});

app.use('/server.html', function(req, res, next){
	// var props = {
	// 	items: [
	// 		'Item 0',
	// 		'Item 1',
	// 		'Item </script>',
	// 		'Item <!--inject!-->',
	// 	]
	// };
	var props = require('./public/js/data');
	var React = require('react');
	var Todos = React.createFactory(require('./public/js-build/todos'));
	var markup = React.renderToString(Todos(props));

	res.render('server', {
		content: markup
	});
});

app.param('uid', function(req, res, next, uid){
	// res.send('uid is: ' + uid);
	console.log('uid is: ' + uid);
	next();
});

app.get('/user/:uid', function(req, res, next){
	res.send('user!');
});

app.listen(2337);

console.log('Server running at http://127.0.0.1:2337/');