var map, latest, marker, position;

function initMap() {
    var center = new google.maps.LatLng(40.8134937, -73.6040468);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    });

    function updateMarker() {
        $.getJSON("/data", function(result){
            latest = result[0];
            if (marker) {
                marker.setMap(null);
            }
            position = new google.maps.LatLng(
                latest.location.latitude,
                latest.location.longitude);
            marker = new google.maps.Marker({position:position,map:map});
            marker.setMap(map);
        });
    }
    setInterval(updateMarker,1000);
}