var express = require("express");

var router = express.Router();


var Burger = require("../models/model_burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// //create a burger
// router.post("/burger/create", function(req,res) {
//   console.log(req.body);
//   Burger.create(req.body.burger_name,function(results) {
//       console.log("Created a burger!!")
//       res.json(req.body.burger_name);
//   });
// });
router.post("/burger/create", function(req, res) {
  Burger.create([//syntax are from the orm
    "burger_name", "devoured","burger_date"
  ], [
    req.body.burger_name, req.body.devoured, req.body.burger_date
  ],function(result) {
    console.log(result);
    console.log("Created a burger");    
    res.json({ id: result.insertId });
  });
});
// router.put("burger/update", function(req,res){
//   Burger.update(function {

//   })
// })



// Export routes for server.js to use.
module.exports = router;
