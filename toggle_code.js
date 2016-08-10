// This shows and hides (respectively) the drawing options.
     function toggleDrawing(drawingManager) {
       if (drawingManager.map) {
         drawingManager.setMap(null);
         // In case the user drew anything, get rid of the polygon
         if (polygon !== null) {
           polygon.setMap(null);
         }
       } else {
         drawingManager.setMap(map);
       }
     }


     // Listen for the event fired when the user selects a prediction from the
     // picklist and retrieve more details for that place.
     searchBox.addListener('places_changed', function() {
       searchBoxPlaces(this);
     });
     // Listen for the event fired when the user selects a prediction and clicks
     // "go" more details for that place.
     document.getElementById('go-places').addEventListener('click', textSearchPlaces);



     function computeTotalDistance(result) {
       var total = 0;
       var myroute = result.routes[0];
       for (var i = 0; i < myroute.legs.length; i++) {
         total += myroute.legs[i].distance.value;
       }
       total = total / 1000;
       document.getElementById('total').innerHTML = total + ' km';
     }
