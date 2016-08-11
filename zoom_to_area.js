// EXCESS FORMULA NOT BEING USED AT THE MOMENT
function zoomToArea() {
// Initialize the geocoder.
var geocoder = new google.maps.Geocoder();
// Get the address or place that the user entered.
var address = document.getElementById('origin').value;
// Make sure the address isn't blank.
if (address == '') {
  window.alert("Please submit an address. Currently you're going nowhere (directionally-speaking, not in life)");
} else {
  // Geocode the address/area entered to get the center. Then, center the map
  // on it and zoom in
  geocoder.geocode(
    { address: address},
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(15);
      } else {
        window.alert('We could not find that location - try entering a more' +
            ' specific place.');
      }
    });
  }
}
