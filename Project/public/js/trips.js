var activity = ["hiking", "mountain%20biking", "camping"];

// modified from insign's solution on Stack Overflow:
// https://stackoverflow.com/questions/5796718/html-entity-decode

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value === html ? txt.value : decodeHtml(txt.value)
}
// API call to trailsAPI
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

// lists out the hiking options on the user end.
function hiking() {
  $.ajax(createSettings(activity[0])).then(function(places) {
    var counter = 1;
    places = places.places;
    for (var i = 0; i < places.length; i++) {
      if (places[i].description) {
        $("#hiking").append("<h5>" + counter + ". " + places[i].name + "</h5>");
        counter++;
      }
    }
  });
}

// lists out the mountain Biking options on the user end.
function mountainBiking() {
  $.ajax(createSettings(activity[1])).then(function(places) {
    var counter = 1;
    places = places.places;
    for (var i = 0; i < places.length; i++) {
      $("#mountainBiking").append("<h5>" + counter + ". " + places[i].name + "</h5>");
      counter++;
    }
  });
}

// lists out the camping options on the user end.
function camping() {
  $.ajax(createSettings(activity[2])).then(function(places) {
    var counter = 1;
    places = places.places;
    for (var i = 0; i < places.length; i++) {
      $("#camping").append("<h5>" + counter + ". " + places[i].name + "</h5>");
      counter++;
    }
  });
}

hiking();
camping();
mountainBiking();
