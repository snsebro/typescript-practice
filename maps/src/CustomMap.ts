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

    createMarker(marker: Marker, windowContent: string): google.maps.Marker {
        const googleMarker = new google.maps.Marker({
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            },
            map: this.googleMap
        });

        const infoWindow = new google.maps.InfoWindow({
            content: windowContent,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            },
            pixelOffset: new google.maps.Size(0, -45)
        })

        googleMarker.addListener('click', () => {
            infoWindow.open(this.googleMap, this.googleMarker)
        })

        return googleMarker
    };

};