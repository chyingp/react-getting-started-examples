var React = require('react');
var BulletinActionsCreator = require('../actions/BulletinActionsCreator');

var BulletinItem = React.createClass({
	handleItemClick: function(){
		BulletinActionsCreator.changeSelectedItem(this.props.dataProvider);
	},	
	render: function(){
		return (
			<div className="bulletin-item" onClick={this.handleItemClick}>
				<span>{this.props.dataProvider.title}</span>
				<span>({this.props.dataProvider.isRead ? '已读' : '未读'})</span>
			</div>
			);
	}
});

module.exports = BulletinItem;