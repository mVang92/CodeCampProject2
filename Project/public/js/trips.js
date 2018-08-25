var activity = ["hiking", "mountain%20biking", "camping"];
function createSettings(activity) {
  return {
    async: true,
    crossDomain: true,
    url:
      "https://trailapi-trailapi.p.mashape.com/?lat=47&limit=6&lon=-92&q[activities_activity_type_name_eq]=" +
      activity +
      "&radius=50",
    method: "GET",
    headers: {
      "X-Mashape-Key": "YJTLmsHVcSmshBY7KAQNTFW5neCfp1bcKh8jsn3abL1mv66iQC",
      Accept: "text/plain",
      "Cache-Control": "no-cache",
      "Postman-Token": "005b4751-d1cd-4232-a259-176a2167ab83"
    }
  };
}

function hiking() {
    console.log("hikin")
  $.ajax(createSettings(activity[0])).then(function(places) {
      places=places.places;
    for (var i = 0; i < places.length; i++) {
      if (places[i].description) {
        $("#hiking").append("<h5>" + places[i].name + "</h5>");
        $("#hiking").append("<p class=\"card-text\" id=\"desc\"><p>" + places[i].activities[0].description + "</p></p>");
        $("#hiking").append("<p><a href=" +places[i].activities[0].url +"target=\"_blank\"> Read more</a> </p>");
      }
    }
  });
}

hiking();

function mountainBiking() {
  $.ajax(createSettings(activity[1])).then(function(places) {
    places = places.places;
    for (var i = 0; i < places.length; i++) {
        $("#mountainBiking").append("<h5>" + places[i].name + "</h5>");
      $("#mountainBiking").append("<p class=\"card-text\" id=\"desc1\"><p>" + places[i].activities[0].description + "</p></p>");
      $("#mountainBiking").append("<p><a href="+places[i].activities[0].url+" target=\"_blank\"> Read more</a> </p>");
    }
  });
}
mountainBiking();

function camping() {
  $.ajax(createSettings(activity[2])).then(function(places) {
    places = places.places;
    console.log(places[1].activities);
    for (var i = 0; i < places.length; i++) {
        $("#camping").append("<h5>" + places[i].name + "</h5>");
        $("#camping").append("<p class=\"card-text\" id=\"desc2\"><p>" + places[i].activities[0].description + "</p></p>");
        $("#camping").append("<p><a href="+places[i].activities[0].url+" target=\"_blank\"> Read more</a> </p>");
    }
  });
}

camping();
