// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// Weather API function
function weather() {
  var location = "Duluth";
  var weatherURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    ",usa&appid=92628e6bc090b38dd780bd35c44f08d0";
  console.log(weatherURL);
  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var tempMinK = response.main.temp_min;
    var tempMaxK = response.main.temp_max;
    var tempCurrentK = response.main.temp;
    var weatherDesc = response.weather[0].description;
    var humidity = response.main.humidity;

    var tempMinF = (9 / 5) * (tempMinK - 273) + 32;
    var tempMaxF = (9 / 5) * (tempMaxK - 273) + 32;
    var tempCurrentF = (9 / 5) * (tempCurrentK - 273) + 32;

    $("#tempMax").append("High: " + parseFloat(tempMaxF).toFixed(2) + "F");
    $("#tempMin").append("Low: " + parseFloat(tempMinF).toFixed(2) + "F");
    $("#tempCurrent").append(
      "Current: " + parseFloat(tempCurrentF).toFixed(2) + "F"
    );
    $("#weatherDesc").append("Condition: " + toTitleCase(weatherDesc));
    $("#humidity").append("Humidity: " + humidity + "%");

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  });
}

// Call weather function upon start of application
weather();
