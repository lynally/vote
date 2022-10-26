'use strict'

var express =require('express');
var apiv1 = express.Router();

var mongoose = require('../db.js');//引入对象
var StarStuff = mongoose.model('Star');//引入模型



apiv1.get('/', function(req, res) {
  res.send('Hello from starApi root route.');
});
// 获取明星列表
apiv1.get('/getStarList', function(req, res) {
  StarStuff.find(function (err, stars) {
    if (err) return console.error(err);
    res.send(stars);
  })
  // res.send('List of starApi users.');
});
// 添加明星
apiv1.get('/add', function(req, res) {

  var star = new StarStuff({ name: '梁静茹' });
  star.save(function (err, people) {
    if (err) return console.error(err);
    people.speak();
  });
  res.send('');
});

module.exports = apiv1;
