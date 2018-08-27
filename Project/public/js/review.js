console.log("review.js loaded");

$(document).on("click", ".updateReview", editReview);
$(document).on("keyup", ".inputBox", finishEdit);

// This function dynamically changes the div into an input
function editReview() {
  var id = $(this).data('bwatersid');
  var reviewDiv = $(`div[data-bwatersid = ${id}]`)
  var currentReview = reviewDiv.text();
  
  console.log(currentReview);
  var inputBox = $(`<input class="inputBox" type="text" data-bwatersid=${id}></input>`);
  inputBox.val(currentReview);
  reviewDiv.replaceWith(inputBox); 
}
// This function updates the comment portion of the review if a user hits the "Enter Key"
function finishEdit(event) {
  if (event.which === 13) {

    var updatedReview = $(this).val().trim()
    var id = $(this).data('bwatersid');
    $(this).blur();
    console.log(id);
    console.log(updatedReview);
    updateReview(id, updatedReview);
  }
}
// This function updates comment in our database
function updateReview(id, updatedReview) {
  $.ajax("/api/bwaters/" + id, {
    type: "PUT",
    data: {
    comments: updatedReview
    }
  }).then(function(DBValue) {
    console.log(DBValue);
    location.reload();
  });
}

// This function deletes the entry from the database and for the website.
$(document).ready(function() { 
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