$(document).ready(function() {
  // Submit click function
  $("#submitReview").click(function(event) {
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
    console.log(userInput);
    $.post("/api/bwaters", userInput).done(function() {
      console.log("Posted new data to database.");
    });
  });
});
