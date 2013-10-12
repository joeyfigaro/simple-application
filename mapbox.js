// Use any provided location values in URL so incoming visits don't hit an unaware map
function getNodeFromURL() {
  var values = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    values.push(hash[1]);
    values[hash[0]] = hash[1];
  }

  return values;
}

var features = [
  {
    // The Linen Powell Resource Library
    'geometry': { 'type': 'Point', 'coordinates': [-77.428968, 37.538834] },
    'properties': {
      'node-id': 'lpl',
      'url': 'http://www.massey.vcu.edu/additional-health-information.htm',
      'address': '401 College Street</br>Richmond, VA 23298',
      'coordinates': [-77.428968, 37.538834],
      'image': 'icons/inactive-node.png',
      'name': 'The Linen Powell Resource Library',
      'parking': '',
      'directions': 'https://maps.google.com/maps?daddr=1250+East+Marshall+Street+Richmond,+VA+23294&hl=en&sll=37.53972,-77.431973&sspn=0.007359,0.013937&geocode=FUDPPAIdDoRi-ylbl6-AIRGxiTH8qz5tv8_TIQ&mra=ls&t=m&z=17'
    }
  }, {
    //  Community Health Education Center (CHEC)
    'geometry': { 'type': 'Point', 'coordinates': [-77.429746, 37.539648] },
    'properties': {
      'node-id': 'chec',
      'url': 'http://go.vcu.edu/chec',
      'address': '1250 East Marshall Street</br>Richmond, VA 23294</br>(804)VCU-CHEC',
      'coordinates': [-77.429746, 37.539648],
      'image': 'icons/inactive-node.png',
      'name': 'Community Health Education Center (CHEC)',
      'hours': 'http://wp.vcu.edu/chec/find-us/',
      'parking': 'is available in the Patient and Visitor Parking Deck on Clay and 12th Streets.',
      'directions': 'https://maps.google.com/maps?daddr=1250+East+Marshall+Street+Richmond,+VA+23294&hl=en&sll=37.53972,-77.431973&sspn=0.007359,0.013937&mra=ls&t=m&z=17'
    }
  }, {
    // Tompkins McCaw Library for the Health Sciences
    'geometry': { 'type': 'Point', 'coordinates': [-77.429141, 37.541477] },
    'properties': {
      'node-id': 'tml',
      'url': 'http://www.library.vcu.edu/tml/',
      'address': '509 North 12th Street</br>Richmond, VA 23298</br>(804) 828-0636',
      'coordinates': [-77.429141, 37.541477],
      'image': 'icons/library-node.png',
      'name': 'Tompkins McCaw Library for the Health Sciences',
      'hours': 'http://www.library.vcu.edu/hours/tml',
      'parking_link': 'http://www.maps.vcu.edu/#parking',
      'directions': 'https://maps.google.com/maps?daddr=Tompkins-McCaw+Library,+509+North+12th+Street,+Richmond,+VA+23298&hl=en&sll=37.540902,-77.445674&sspn=0.030523,0.022573&geocode=CTAV_S2Okn9_FUTWPAIdo4Zi-ymJ-_9CIRGxiTFpytjOfpgCIg&mra=ls&t=m&z=16'
    }
  }, {
    // TML Learning Center @ Hunton
    'geometry': { 'type': 'Point', 'coordinates': [-77.43197, 37.539722] },
    'properties': {
      'node-id': 'tmllc',
      'url': 'http://www.library.vcu.edu/tml/hunton/',
      'address': '1110 East Broad Street</br>Richmond, VA',
      'coordinates': [-77.43197, 37.539722],
      'image': 'icons/library-node.png',
      'name': 'TML Learning Center @ Hunton',
      'hours': 'http://www.library.vcu.edu/hours/tml',
      'directions': 'https://maps.google.com/maps?daddr=1110+East+Broad+Street+Richmond,+VA&hl=en&sll=37.539722,-77.43197&sspn=0.007359,0.013937&geocode=FYrPPAIdXnti-yn13kxGIhGxiTF3Wt1bCsohBA&mra=ls&t=m&z=17'
    }
  }, {
    // Virginia Adult Learning Resource Center
    'geometry': { 'type': 'Point', 'coordinates': [-77.451488, 37.548659] },
    'properties': {
      'node-id': 'alrc',
      'url': 'http://valrc.org/',
      'address': '817 W. Franklin St. Room 221</br>Richmond, VA 23284-2037',
      'coordinates': [-77.451488, 37.548659],
      'image': 'icons/inactive-node.png',
      'name': 'Virginia Adult Learning Resource Center',
      'directions': 'https://maps.google.com/maps?daddr=817+W.+Franklin+St.+Room+221+Richmond,+VA+23284&hl=en&sll=37.552556,-77.566137&sspn=0.007357,0.013937&mra=ls&t=m&z=17'
    }
  }, {
    // James Branch Cabell Library
    'geometry': { 'type': 'Point', 'coordinates': [-77.454229, 37.548494] },
    'properties': {
      'node-id': 'jbc',
      'url': 'http://library.vcu.edu/jbc',
      'address': '901 Park Ave.</br>Richmond, VA 23284</br>(804) 828-1109',
      'coordinates': [-77.454229, 37.548494],
      'image': 'icons/library-node.png',
      'name': 'James Branch Cabell Library',
      'hours': 'http://www.library.vcu.edu/hours/jbc',
      'parking_link': 'http://www.maps.vcu.edu/monroepark/westmainparking/index.html',
      'directions': 'https://maps.google.com/maps?daddr=901+Park+Ave.+Richmond,+VA+23284&hl=en&sll=37.541447,-77.429087&sspn=0.014717,0.027874&mra=ls&t=m&z=17'
    }
  },
  {
    // The Lois E. Trani Patient Resource Library
    'geometry': { 'type': 'Point', 'coordinates': [-77.566142, 37.552559] },
    'properties': {
      'node-id': 'letl',
      'url': 'http://wrc2003-test.vcu.edu/massey/massey-stony-point.htm',
      'address': '9000 Stony Point Pkwy</br>Richmond, VA 23235',
      'coordinates': [-77.566142, 37.552559],
      'image': 'icons/library-node.png',
      'name': 'The Lois E. Trani Patient Resource Library',
      'directions': 'https://maps.google.com/maps?daddr=9000+Stony+Point+Pkwy+Richmond,+VA+23235&hl=en&sll=37.53972,-77.431973&sspn=0.007359,0.013937&mra=ls&t=m&z=17'
    }
  }
];

$(function() {
  mapbox.load(['joeyfigaro.map-5zit2koj', 'joeyfigaro.map-zjl9z9yt'], function(data) {
    var map = mapbox.map('map', null, null);
    var markers = mapbox.markers.layer().features(features);
    var interaction = mapbox.markers.interaction(markers);

    var requestedNode = getNodeFromURL();

    // Pull wanted layer(s) out of the objects mapbox just returned to us
    map.addLayer(data[0].layer);
    map.addLayer(markers);

    // Configure our map UI
    map.ui['zoomer'].add();
    map.ui['fullscreen'].add();

    // Zoom and center the map.
    map.zoom(15).center(data[1].center);

    // Marker behavior and basic configuration
    interaction.showOnHover(false);
    interaction.hideOnMove(false);

    // Build and configure our custom tooltips
    interaction.formatter(function(f) {
      var name = (!f.properties.url) ? '<ul><span class="marker-title">' + f.properties.name + '</span></li>' : '<li><a class="marker-title" href="' + f.properties.url + '">' + f.properties.name + '</a></li>';
      var hours = (!f.properties.hours) ? '' : '<li><a target="_blank" href=' + f.properties.hours + '>Hours</a></li>';
      var address = (!f.properties.address) ? '' : '<li><address>' + f.properties.address + '</address></li>';
      var directions = (!f.properties.directions) ? '' : '<li><a target="_blank" href=' + f.properties.directions + '>Directions</a></li>';
      var parking = (!f.properties.parking) ? '' : '<li>Parking is available ' + f.properties.parking + '</li>';
      var parking_link = (!f.properties.parking_link) ? '' : '<li><a href="' + f.properties.parking_link + '">Parking</a></li>';

      return '<ul>' + name + address + hours + parking + parking_link + directions;
    });

    // Node/Marker Navigation Menu (jQuery)
    $('ul#map-nav a').each(function() {
      $(this).on('click', function() {
        var id = $(this).attr('id');
        var target = null;
        var tooltip = null;

        switch(id) {
          case 'lpl':
            target = 0;
            tooltip = 6;
          break;
          case 'chec':
            target = 1;
            tooltip = 5;
          break;
          case 'tml':
            target = 2;
            tooltip = 3;
          break;
          case 'tmllc':
            target = 3;
            tooltip = 4;
          break;
          case 'alrc':
            target = 4;
            tooltip = 1;
          break;
          case 'jbc':
            target = 5;
            tooltip = 2;
          break;
          case 'letl':
            target = 6;
            tooltip = 0;
          break;
        }

        map.ease.location({
          lat: features[target].properties.coordinates[1],
          lon: features[target].properties.coordinates[0]
        }).zoom(map.zoom()).optimal();

        markers.markers()[tooltip].showTooltip();

        return false;
      });
    });

    // Handle URL Variables (map.html?node=tml)
    if (requestedNode == 'jbc') {
      map.ease.location({
        lat: features[5].properties.coordinates[1],
        lon: features[5].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[2].showTooltip() }, 50);
    }
    else if (requestedNode == 'alrc') {
      map.ease.location({
        lat: features[4].properties.coordinates[1],
        lon: features[4].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[1].showTooltip() }, 50);
    }
    else if (requestedNode == 'tmllc') {
      map.ease.location({
        lat: features[3].properties.coordinates[1],
        lon: features[3].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[4].showTooltip() }, 50);
    }
    else if (requestedNode == 'tml') {
      map.ease.location({
        lat: features[2].properties.coordinates[1],
        lon: features[2].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[3].showTooltip() }, 50);
    }
    else if (requestedNode == 'chec') {
      map.ease.location({
        lat: features[1].properties.coordinates[1],
        lon: features[1].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[5].showTooltip() }, 50);
    }
    else if (requestedNode == 'lpl') {
      map.ease.location({
        lat: features[0].properties.coordinates[1],
        lon: features[0].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[6].showTooltip() }, 50);
    }
    else if (requestedNode == 'letl') {
      map.ease.location({
        lat: features[6].properties.coordinates[1],
        lon: features[6].properties.coordinates[0]
      }).zoom(map.zoom()).optimal();

      setTimeout(function() { markers.markers()[0].showTooltip() }, 50);
    }
    else if (requestedNode == '') {
      map.zoom(14);
    }

    markers.factory(function(m) {
      var elem = mapbox.markers.simplestyle_factory(m);

      // Set our node icons
      elem.setAttribute('src', m.properties.image)
      elem.setAttribute('id', 'node');

      // Watch for click events
      MM.addEvent(elem, 'click', function(e) {

        // Ease map to selected node
        map.ease.location({
          lat: m.geometry.coordinates[1],
          lon: m.geometry.coordinates[0]
        }).zoom(map.zoom()).optimal();
      });

      // Add our custom nodes to our map
      map.addLayer(markers);

      return elem;
    });
  });
});

