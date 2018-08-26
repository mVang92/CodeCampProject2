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

  // Render the form page
  app.get("/form", function(req, res) {
    res.render("form");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
