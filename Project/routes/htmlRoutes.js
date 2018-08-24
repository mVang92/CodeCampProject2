var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.bwaters.findAll({}).then(function(dbBwaterss) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbBwaterss
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.bwaters.findOne({ where: { id: req.params.id } }).then(function(dbBwaters) {
      res.render("example", {
        example: dbBwaters
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
