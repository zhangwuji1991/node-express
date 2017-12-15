// 入口文件
var express    = require("express");
var mongoose   = require("mongoose");    //加载数据库模块
var bodyParser = require("body-parser"); //获取post提交的数据
var cors       = require('cors')
// var swig       = require("swig");        //加载模板处理模块



//创建应用
var app = express();

//设置静态文件托管
// app.use('/public',express.static(__dirname+'/public'));

// //定义当前使用的模板引擎
// app.engine('html',swig.renderFile);
// app.set('views','./views');
// app.set('view engine','html');
// //取消模板缓存
// swig.setDefaults({cache : false });

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//设置bodypreser
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',require('./routers/main'));

//链接数据库,启动应用
mongoose.Promise = global.Promise;

//设置跨域
app.use(cors());

//监听http请求
mongoose.connect("mongodb://localhost:27012/bkht",function(err){
	if(err){
		console.log("数据库链接失败")
	}else{
		console.log("数据库链成功")
		app.listen(8888);
	}
})
