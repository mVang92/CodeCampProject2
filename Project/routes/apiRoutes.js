var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/bwaters", function(req, res) {
    db.bwaters.findAll({}).then(function(dbBwaters) {
      res.json(dbBwaters);
    });
  });

  // Create a new example
  app.post("/api/bwaters", function(req, res) {
    db.bwaters.create(req.body).then(function(dbBwaters) {
      res.json(dbBwaters);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/bwaters/:id", function(req, res) {
    db.bwaters
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBwaters) {
        res.json(dbBwaters);
      });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/bwaters", function(req, res) {
    db.bwaters
      .update(
        {
          comments: req.body.comments
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(dbBwaters) {
        res.json(dbBwaters);
      });
  });
};
