/**
 * Created by zhangshiqiu on 16/4/28.
 */


function initMap() {
    var map, latest, marker, position;
    var center = new google.maps.LatLng(40.8134937, -73.6040468);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    });

    function updateInfo(heading) {
        $("#next_stop").text(heading);
    }

    function updateTable(result) {
        var table = '<table class="table table-striped"></table>';
        var table_head =
            '<thead>\
                <tr>\
                    <th>#</th>\
                    <th>Updated Time</th>\
                    <th>Longitude</th>\
                    <th>Latitiude</th>\
                </tr>\
            </thead>';

        var tr_list = [];

        for (var i = 0; i<result.length; i++){
            var record = result[i];
            var td1 = '<td>'+(i+1)+'</td>';
            var td2 = '<td>'+(new Date(record.time)).toLocaleString()+'</td>';
            var td3 = '<td>'+record.location.latitude+'</td>';
            var td4 = '<td>'+record.location.longitude+'</td>';
            var tr = '<tr>'+td1+td2+td3+td4+'</tr>';
            tr_list.push(tr);
        }

        var location_table = $("#location_table");
        location_table.html(table);
        location_table.append(table_head);
        for (var i=0;i<tr_list.length;i++){
            location_table.append(tr_list[i]);
        }
    }



    function updateMap(latest) {
        function updateMarker() {
            if (marker) {
                marker.setMap(null);
            }
            position = new google.maps.LatLng(
                latest.location.latitude,
                latest.location.longitude);
            marker = new google.maps.Marker({position:position,map:map});
            marker.setMap(map);
        }
        updateMarker();
    }

    function updatePage() {
        $.getJSON("/update", function(result){
            if (result !== null & result.length > 0){
                updateMap(result[0]);
                updateInfo(result[0].heading);
                updateTable(result);
            }
        });
    }
    setInterval(updatePage,1000);
}