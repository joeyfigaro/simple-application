var current = Titanium.UI.currentWindow;

// Define our orientations
current.orientationModes = [
  Titanium.UI.PORTRAIT,
  Titanium.UI.LANDSCAPE_LEFT,
  Titanium.UI.LANDSCAPE_RIGHT
];

// Set up our view
current.backgroundColor = '#fff';
current.barColor = '#000';

Titanium.Geolocation.purpose = "Directions";

function drawMap() {
  if(Titanium.Geolocation.locationServicesEnabled) {
    Titanium.Geolocation.getCurrentPosition(function(e) {
      var longitude = e.coords.longitude;
      var latitude = e.coords.latitude;
      var altitude = e.coords.altitude;
      var heading = e.coords.heading;
      var accuracy = e.coords.accuracy;
      var speed = e.coords.speed;
      var timestamp = e.coords.timestamp;
      var altitudeAccuracy = e.coords.altitudeAccuracy;

      // use our current coords to retrieve a readable address
      var currentAddr = {};
      conn = Titanium.Network.createHTTPClient();
      conn.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true');

      conn.onload = function() {
        var response = JSON.parse(this.responseText);
        if (response.status === 'OK') {
            currentAddr = response.results[0].formatted_address;
          currentAddr = currentAddr.replace(/\s+/g, '+');

          directions = Titanium.UI.createWebView({
            url:'http://maps.google.com/maps?f=q&saddr=' + currentAddr + '&daddr=2000+Greenbriar+Lane+West+Grove,+PA+19390'
          });

          current.add(directions);
        } else {
          Titanium.API.info(status);
        }
      };

      conn.send();
    });
  } else {
    alert('Please enable GPS on your device.');
  }
}


// man the harpoons; execute this puppy
Titanium.Geolocation.addEventListener('location', function() {
  drawMap();
});