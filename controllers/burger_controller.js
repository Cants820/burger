var express = require("express");

var router = express.Router();


var Burger = require("../models/model_burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    // console.log(hbsObject);
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
  console.log("post method");
  Burger.create([//syntax are from the orm
    "burger_name"
  ], [
    req.body.burger_name
  ],function(result) {
    // console.log(result);
    // console.log("Created a burger");    
    res.json({ id: result.insertId });
  });
});

router.put("/burger/update/:id", function(req,res){
    console.log("Update Post Hit");

      // console.log(req);
    // console.log("Your hitting me " + isDevoured);
      var devourState= 1;
     var condition= req.params.id;
     // console.log(burgerId);
     console.log(devourState);
   Burger.update({
     devoured: 1
    }), condition, function(result) {
      // res.redirect("/");
      console.log("req.body.devoured", req.body.devoured);
      console.log("successful update");
      // if (result.changedRows == 0) {
      //   return res.status(404).end();
      // } else {
      //   res.status(200).end();
      // }
   }
});

router.delete("burger/delete/:id", function(req,res){
  var condition = "id = " + req.params.id;

  Burger.delete(condition, function(result) {
      if (result.affectedRows == 0){
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });

});



// Export routes for server.js to use.
module.exports = router;
