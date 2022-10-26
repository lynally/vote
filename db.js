var mongoose = require("mongoose"); //引入mongoose
var Schema = mongoose.Schema;


var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
  console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
                                      //在这里创建你的模式和模型
  console.log('connected!');
});
db.on('connected', () => {
  console.log('MongoDB connected success');
});
db.on('disconnected', () => {
  console.log('MongoDB connected disconnected');
});
mongoose.connect('mongodb://localhost/newDB');

// 创建一个Schema
var Star = Schema({
  name: String
});
Star.methods.speak = function () {
  var greeting = this.name
      ? "star name is " + this.name
      : "I don't have a name";
  console.log(greeting);
}

mongoose.model('Star', Star);  // Schema编译成Model  (相当于Class（文档）)



module.exports = mongoose;
