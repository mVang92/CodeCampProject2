console.log("review.js loaded");
$(document).ready(function() {
  $(".updateReview").click(function(event) {
    event.preventDefault();
    var id = $(this).data("bwatersid");
    console.log(id);
    $.ajax("/api/bwaters/" + id, {
      type: "PUT"
    }).then(function() {
      console.log("Review updated: ", id);
      location.reload();
    });
  });

  $(".deleteReview").click(function(event) {
    event.preventDefault();
    var id = $(this).data("bwatersid");
    $.ajax("/api/bwaters/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted review: ", id);
      location.reload();
    });
  });
});
