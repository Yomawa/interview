var express = require('express');
var router = express.Router();
db = require("../models");

//INDEX GET /api/movies/
router.get('/',function(req,res){
  db.Movie.find({},function(err,movies){
    res.status(200).send(movies);
  });
});
//CREATE POST /api/movies/
router.post('/',function(req,res){
  //console.log("THIS IS REQ BODY!", req.body);
  db.Movie.create(req.body,function(error, movie){
    //201 statu crated
    res.status(201).send(movie);
  });
});

//GET SHOW /api/movies/:id
router.get('/:id', function(req,res){
  db.Movie.findById(req.params.id, function(err, movie){
    res.send(movie);
  });
});
//UPDATE PUT /api/movies/:id

router.put('/:id', function(req,res){
  db.Movie.findByIdAndUpdate(req.params.id, req.body, function(err,movie){
    //200 status is ok
    res.status(200).send(movie);
  });
});
router.delete('/:id', function(req,res){
  db.Movie.findByIdAndRemove(req.params.id, function(err,movie){
    res.status(200).send(movie);
  });
});
module.exports = router;