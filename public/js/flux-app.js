var React = require('react');
var BulletinBoard = require('./components/BulletinBoard');
var BulletinDetail = require('./components/BulletinDetail');
var BulletinStore = require('./stores/BulletinStore');

var getAllBulletins = function(){
	return {
		bulletins: BulletinStore.getAll(),
		selectedId: BulletinStore.getCurBulletinId()
	};
};

var App = React.createClass({
	componentDidMount: function() {
		BulletinStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		BulletinStore.removeChangeListener(this.onChange);
	},	
	onChange: function(){
		this.setState(getAllBulletins());
	},
	getInitialState: function(){
		return getAllBulletins();
	},
	render: function() {
		var that = this;
		var data = this.state.bulletins.filter(function(item){
			return item.id == that.state.selectedId;
		})[0];

		return (
			<div className="bulletin">
				<BulletinBoard dataProvider={this.state.bulletins} onBulletinItemClick={this.handleBulletinItemClick} />
				<BulletinDetail dataProvider={data} />
			</div>
			);
	}
});

React.render(<App />, document.getElementById('example')); 