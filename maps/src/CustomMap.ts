export class CustomMap {
    constructor(
        userLocation?: {
            lat: number; 
            lng: number}, 
        companyLocation?: {
            lat: number; 
            lng: number}){
        this.googleMap = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 0, 
                lng: 0
            },
            zoom: 2,
            zoomControl: true,
            draggable: true,
        });
        // this.googleMarker = new google.maps.Marker({
        //     position: {
        //         lat: 0,
        //         lng: 0
        //     },
        //     map: this.googleMap
        // });
    }

    private googleMap: google.maps.Map;

    googleMarker: google.maps.Marker;

    createMarker(location: {lat: number; lng: number}): google.maps.Marker {
        return new google.maps.Marker({
            position: {
                lat: location.lat,
                lng: location.lng
            },
            map: this.googleMap
        })
    }

}