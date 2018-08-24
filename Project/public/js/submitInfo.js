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
      reviewComments: $("#reviewTextArea")
        .val()
        .trim(),
      // Capture the five question ratings
      ratings: [
        $("#Q1")
          .val()
          .trim(),
        $("#Q2")
          .val()
          .trim(),
        $("#Q3")
          .val()
          .trim(),
        $("#Q4")
          .val()
          .trim(),
        $("#Q5")
          .val()
          .trim()
      ]
    };
    console.log(userInput);
  });
});

// module.exports = userInput;
