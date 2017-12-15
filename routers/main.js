var express = require('express');
var router  = express.Router();
var User    = require('../models/User');
// 设置统一返回格式
router.use(function(req,res,next){
	responseData = {
		code:0,
		message:''
	}
	next();
})
//登录接口
router.post('/login',function(req,res,next){
	    //查询数据库
	    User.findOne({
	    	username: req.body.username
	    }).then(function(users){
			if(!users){
				responseData.code = 0;
			    responseData.message = "查无此号";
			    res.json(responseData);
				return;
			}else{
				if(users.password != req.body.password ){
					responseData.code = 1;
			        responseData.message = "密码输入错误";
			        res.json(responseData);
				}else{
					responseData.code = 2;
			        responseData.message = "登录成功";
			        res.json(responseData);
				}
			}
	    })   
});

//获取用户表中所有信息
router.post('/user',function(req,res,next){
	User.find().then(function(users){
		console.log(users)
        responseData.code = 1;
        responseData.message = "获取用户所有信息";
        responseData.data=users
        res.json(responseData);
	})
})
module.exports = router;
