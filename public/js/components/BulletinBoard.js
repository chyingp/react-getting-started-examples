var React = require('react');
var BulletinItem = require('./BulletinItem');

var BulletinBoard = React.createClass({
	handleBulletinItemClick: function(item){
		this.props.onBulletinItemClick(item);	
	},
	render: function(){
		var that = this;
		var list = this.props.dataProvider.map(function(item){
			return <BulletinItem dataProvider={item} onClick={that.handleBulletinItemClick} />;
		});

		return (
			<div className="bulletin-board">
				<h3>公告板</h3>
				{list}
			</div>
			);
	}
});

module.exports = BulletinBoard;