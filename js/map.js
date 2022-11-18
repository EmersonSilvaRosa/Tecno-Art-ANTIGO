jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.latLng(-23.4862561446276, -47.44877090008547,15);
        var mapOption = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Localização"
        });
        var map = new google.maps.map(document.getElementById("map1"),mapOptions);
        maker.setMap(map);
    }
    init_map1();
});