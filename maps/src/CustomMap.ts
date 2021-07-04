interface Marker {
    location: {
        lat: number;
        lng: number;
    };
};

export class CustomMap {
    constructor(mapDivId: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
            center: {
                lat: 0, 
                lng: 0
            },
            zoom: 2,
            zoomControl: true,
            draggable: true,
        });
    };

    private googleMap: google.maps.Map;

    googleMarker: google.maps.Marker;

    createMarker(marker: Marker): google.maps.Marker {
        return new google.maps.Marker({
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            },
            map: this.googleMap
        });
    };
};