var React = require('react');
var Todos = require('./todos');
// var props = {
// 	items: [
// 		'Item 0',
// 		'Item 1',
// 		'Item </script>',
// 		'Item <!--inject!-->',
// 	]
// };
var props = require('./data');

React.render(
	<Todos items={props.items} />,
	document.getElementById('container')
);