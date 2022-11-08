var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res) {
  res.render('admin/adminHome',{admin:true});
});

module.exports = router;
