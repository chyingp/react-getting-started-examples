var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var list = [],
	curBulletinId = 1;
for(var i = 1; i <= 3; i++){
	list.push({
		id: i,
		isRead: false,
		title: '公告' + i + '的标题',
		content: '公告' + i + '的详情',
		time: new Date() - 0
	});
}

var BulletinStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return list;
	},
	getCurBulletinId: function(){
		return curBulletinId;
	},
	emitChange: function(){
		this.emit('change');
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case "selectedBulletinChanged":
      list.forEach(function(item){
      	if(item.id==action.data.id){
      		item.isRead = true;
      		curBulletinId = item.id;
      	}
      });
      BulletinStore.emitChange();
      break;

    default:
  }
});

module.exports = BulletinStore;
