// Weather API function for today
function weather() {
  var forecastDays = 6;
  var weatherURL =
    "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22duluth%2C%20mn%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

    // Appends dates of the week to the page
    function getDates() {
      for (var i = 0; i < forecastDays; i++) {
        var date = response.query.results.channel.item.forecast[i].date;
        $("#day" + i + "Date").append(date);
      }
    }

    // Appends days of the week to the page
    function getDays() {
      for (var i = 0; i < forecastDays; i++) {
        var day = response.query.results.channel.item.forecast[i].day;
        $("#day" + i + "Day").append(day);
      }
    }

    // Appends high temperatures to the page
    function getMaxTemp() {
      for (var i = 0; i < forecastDays; i++) {
        var maxTemp = response.query.results.channel.item.forecast[i].high;
        $("#day" + i + "Max").append("High: " + maxTemp + "°F");
      }
    }

    // Appends low temperatures to the page
    function getMinTemp() {
      for (var i = 0; i < forecastDays; i++) {
        var minTemp = response.query.results.channel.item.forecast[i].low;
        $("#day" + i + "Min").append("Low: " + minTemp + "°F");
      }
    }

    // Appends weather conditions to the page
    function getWeatherCond() {
      for (var i = 0; i < forecastDays; i++) {
        var condition = response.query.results.channel.item.forecast[i].text;
        $("#day" + i + "Cond").append(condition);
      }
    }

    // Get dates for days
    getDates();

    // Get days
    getDays();

    // Get max temperature
    getMaxTemp();

    // Get min temperature
    getMinTemp();

    // Get weather condition
    getWeatherCond();
  });
}

// Call weather and date function upon start of application
weather();
