// <script>
function convertNameToLatLong(name, callback){
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + name, function(response){
    callback(response.results[0].geometry.location);
  })
  // callback([lat, long])
}
// </script>
