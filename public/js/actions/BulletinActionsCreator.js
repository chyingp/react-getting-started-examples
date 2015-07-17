var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
	changeSelectedItem: function(item){
		AppDispatcher.dispatch({
			actionType: 'selectedBulletinChanged',
			data: item
		});
	}
};