import express from 'express';
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/login'); 
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  
  res.redirect('http://localhost:3000/login'); 
});

export default router;
