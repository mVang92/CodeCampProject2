var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.bwaters.findAll({}).then(function(dbBwaters) {
      res.json(dbBwaters);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.bwaters.create(req.body).then(function(dbBwaters) {
      res.json(dbBwaters);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.bwaters
      .destroy({ where: { id: req.params.id } })
      .then(function(dbBwaters) {
        res.json(dbBwaters);
      });
  });
};
