var express = require('express');
const pino = require("pino");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  res.render('user/userHome');
  res.render("user/det");

});

router.get('/nacktschnecke', function(req, res) {

  res.render("user/det");
});


var user = {
  first_name: "John",
  last_name: "Smith",
  age: "38",
  department: "Software"
};

delete user.last_name;

const logger = pino()

logger.info('hello world')

const child = logger.child({ a: Object.keys(user).length })
child.info(Object.keys(user).length)


module.exports = router;
