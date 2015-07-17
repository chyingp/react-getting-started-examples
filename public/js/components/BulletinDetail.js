var React = require('react');

var BulletinDetail = React.createClass({
	render: function(){
		return (
			<div className="bulletin-board">
				<h3>{this.props.dataProvider.title}</h3>
				<h3>{this.props.dataProvider.content}</h3>
			</div>
			);
	}
});

module.exports = BulletinDetail;