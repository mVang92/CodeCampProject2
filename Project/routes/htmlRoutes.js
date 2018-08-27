var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.bwaters.findAll({}).then(function(dbBwaters) {
      res.render("index", {
        msg: "Welcome!",
        bwaters: dbBwaters
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
