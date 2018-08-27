$(document).ready(function() {
  // Submit click function
  $("#myForm").submit(function(event) {
    event.preventDefault();

    //Gather user input
    var userInput = {
      // Capture the user first name
      firstName: $("#firstName")
        .val()
        .trim(),
      //Capture the user last name
      lastName: $("#lastName")
        .val()
        .trim(),
      // Capture the user comments
      comments: $("#comments")
        .val()
        .trim(),
      // Capture the five question ratings
      Q1: +$("#Q1")
        .val()
        .trim(),
      Q2: +$("#Q2")
        .val()
        .trim(),
      Q3: +$("#Q3")
        .val()
        .trim(),
      Q4: +$("#Q4")
        .val()
        .trim(),
      Q5: +$("#Q5")
        .val()
        .trim()
    };
    $.post("/api/bwaters", userInput).done(function() {
      $("#myModal").modal("toggle");
      $("#myModal").on("shown.bs.modal", function() {
        $("#myForm").trigger("focus");
      });
    });
  });
});
