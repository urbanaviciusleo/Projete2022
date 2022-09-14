// links para pesquisa:
// https://developers.google.com/maps/documentation/geocoding/requests-geocoding
// somente para ver como acessar JSON https://www.youtube.com/watch?v=pRiQeo17u6c&ab_channel=TraversyMedia


geocode();






const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

/*
// Adds a marker to the map.
function addMarker(location: google.maps.LatLngLiteral, map: google.maps.Map) {
  // Add the marker at the clicke location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}


*/



//funcoes

function initializeMap(coordinates){
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 18,
    center: coordinates 
    });
    //console.log(mapa.center);
    return mapa;
}

function geocode(){

    var location = 'São Paulo'.replace(/ /g, '%20');
    var apikey = 'AIzaSyBxMYHsFo1OrnLb8P1S6pdAIj__iJceuS0';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?' + 'address=' + location + '&key=' + apikey;

    axios.get(url)
    .then(function(response){
        //var coordinates = response.data.results[0].geometry.location;
        console.log(response)
        //var mapa = initializeMap(coordinates);
        
        //addMarker(coordinates, mapa);
    })
    .catch(function(error){
        console.log(error);
    });
}