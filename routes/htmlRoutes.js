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

  // Render the plan camping trip page
  app.get("/hiking", function(req, res) {
    res.render("hiking");
  });

  // Render the plan camping trip page
  app.get("/camping", function(req, res) {
    res.render("camping");
  });

  // Render the plan camping trip page
  app.get("/mountain-biking", function(req, res) {
    res.render("mtnBiking");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
