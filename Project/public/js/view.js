$(document).ready(function() {
  // Get the review from the data base and append them to the page
  function getReviews() {
    $.get("/api/bwaters", function(data) {
      // console.log(data);
      // Loop through the last 3 reviews in the database
      // and returns the first name and comments in reverse order
      data.slice(-3).reverse().forEach((data, i) => {
          $("#reviewDesc" + (3 - i)).append(data.comments)
          $('#name' +( 3 - i)).append(data.firstName)
      })
  })
}
  // Call the function to get reviews
  getReviews();
});
