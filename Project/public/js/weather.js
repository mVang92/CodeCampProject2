// Weather API function for today
function weatherToday() {
  var location = "Duluth";
  var apiKey = "92628e6bc090b38dd780bd35c44f08d0";
  var weatherURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    ",usa&appid=" +
    apiKey;
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
    var tempMinF = tempConvert(tempMinK);
    var tempMaxF = tempConvert(tempMaxK);
    var tempCurrentF = tempConvert(tempCurrentK);

    // Append today's max/min temperature, weather condition, and humidity
    $("#tempMax").append("High: " + parseFloat(tempMaxF).toFixed(2) + "°F");
    $("#tempMin").append("Low: " + parseFloat(tempMinF).toFixed(2) + "°F");
    $("#tempCurrent").append(
      "Current: " + parseFloat(tempCurrentF).toFixed(2) + "°F"
    );
    $("#weatherDesc").append("Condition: " + toTitleCase(weatherDesc));
    $("#humidity").append("Humidity: " + humidity + "%");
  });
}

// Weather API function for 6 day forecast
function weatherForecast() {
  var location = "Duluth";
  var apiKey = "92628e6bc090b38dd780bd35c44f08d0";
  var weatherURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    location +
    ",usa&appid=" +
    apiKey;
  console.log(weatherURL);
  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var dayTwoDate = response.list[6].dt_txt;
    var dayThreeDate = response.list[14].dt_txt;
    var dayFourDate = response.list[22].dt_txt;
    var dayFiveDate = response.list[30].dt_txt;
    var daySixDate = response.list[38].dt_txt;

    var dayTwoTempK = response.list[6].main.temp;
    var dayThreeTempK = response.list[14].main.temp;
    var dayFourTempK = response.list[22].main.temp;
    var dayFiveTempK = response.list[30].main.temp;
    var daySixTempK = response.list[38].main.temp;

    var dayTwoTempF = tempConvert(dayTwoTempK);
    var dayThreeTempF = tempConvert(dayThreeTempK);
    var dayFourTempF = tempConvert(dayFourTempK);
    var dayFiveTempF = tempConvert(dayFiveTempK);
    var daySixTempF = tempConvert(daySixTempK);

    var dayTwoDesc = response.list[6].weather[0].description;
    var dayThreeDesc = response.list[14].weather[0].description;
    var dayFourDesc = response.list[22].weather[0].description;
    var dayFiveDesc = response.list[30].weather[0].description;
    var daySixDesc = response.list[38].weather[0].description;

    var dayTwoHumidity = response.list[6].main.humidity;
    var dayThreeHumidity = response.list[14].main.humidity;
    var dayFourHumidity = response.list[22].main.humidity;
    var dayFiveHumidity = response.list[30].main.humidity;
    var daySixHumidity = response.list[38].main.humidity;

    // Append our data from the API to the page
    // Dates
    $("#dayTwoDate").append(dayTwoDate.slice(0, 11));
    $("#dayThreeDate").append(dayThreeDate.slice(0, 11));
    $("#dayFourDate").append(dayFourDate.slice(0, 11));
    $("#dayFiveDate").append(dayFiveDate.slice(0, 11));
    $("#daySixDate").append(daySixDate.slice(0, 11));

    // Temperature in F
    $("#dayTwoTemp").append(
      "Temperature: " + parseFloat(dayTwoTempF).toFixed(2) + "°F"
    );
    $("#dayThreeTemp").append(
      "Temperature: " + parseFloat(dayThreeTempF).toFixed(2) + "°F"
    );
    $("#dayFourTemp").append(
      "Temperature: " + parseFloat(dayFourTempF).toFixed(2) + "°F"
    );
    $("#dayFiveTemp").append(
      "Temperature: " + parseFloat(dayFiveTempF).toFixed(2) + "°F"
    );
    $("#daySixTemp").append(
      "Temperature: " + parseFloat(daySixTempF).toFixed(2) + "°F"
    );

    // Weather condition
    $("#dayTwoDesc").append("Condition: " + toTitleCase(dayTwoDesc));
    $("#dayThreeDesc").append("Condition: " + toTitleCase(dayThreeDesc));
    $("#dayFourDesc").append("Condition: " + toTitleCase(dayFourDesc));
    $("#dayFiveDesc").append("Condition: " + toTitleCase(dayFiveDesc));
    $("#daySixDesc").append("Condition: " + toTitleCase(daySixDesc));

    // Humidity
    $("#dayTwoHumidity").append("Humidity: " + dayTwoHumidity + "%");
    $("#dayThreeHumidity").append("Humidity: " + dayThreeHumidity + "%");
    $("#dayFourHumidity").append("Humidity: " + dayFourHumidity + "%");
    $("#dayFiveHumidity").append("Humidity: " + dayFiveHumidity + "%");
    $("#daySixHumidity").append("Humidity: " + daySixHumidity + "%");
  });
}

// Today's date function
// function dateToday() {
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth() + 1; //January is 0!
//   var yyyy = today.getFullYear();

//   if (dd < 10) {
//     dd = "0" + dd;
//   }

//   if (mm < 10) {
//     mm = "0" + mm;
//   }

//   today = mm + "/" + dd + "/" + yyyy;
//   $("#today").append(today);
// }

// This function is called in the weather API functions
// Capitalizes the first letter of each word
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Converts kelvin to fahrenheit
function tempConvert(kelvinTemp) {
  var fahrenheitTemp = (9 / 5) * (kelvinTemp - 273) + 32;
  return fahrenheitTemp;
}

// Call weather and date function upon start of application
weatherToday();
weatherForecast();
// dateToday();
