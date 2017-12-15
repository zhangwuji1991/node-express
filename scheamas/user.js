var mongoose = require('mongoose');
//用户结构
module.exports = new mongoose.Schema({
	//用户名
	username: String,
	//密码
	password: String,
	//头像
	headimgs: {
		type: String,
		default:''
	}

})