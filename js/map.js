function mapaStart() {
    var wspolrzedne = new google.maps.LatLng(54.573930, 17.869713);
    var opcjeMapy = {
        zoom: 7,
        center: wspolrzedne,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);

    //marker
    var punkt = new google.maps.LatLng(54.573930, 17.869713);
    var opcjeMarkera = {
        position: punkt,
        map: mapa,
        title: "Studio Włosek"
    }

    var marker = new google.maps.Marker(opcjeMarkera)
}
