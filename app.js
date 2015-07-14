var express = require('express'),
	app = express();

app.use('/js/build/router-basic.js', function(req, res, next){

	var browserify = require('browserify');
	browserify()	
		.add(__dirname + '/public/js/router-basic.js')
		.transform(require('reactify'))
		.bundle()
		.pipe(res);
});
app.use(express.static(__dirname + '/public'));
app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');