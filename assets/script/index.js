'use strict';


mapboxgl.accessToken = 'pk.eyJ1IjoicmlmYXQxMnNoIiwiYSI6ImNsZzVtbGNpdzA0enUzY215aHpzcWc1MXoifQ.WBcwNE4aj_QPiU_-1pSj_g'

const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 4,
    center: [-97.138451, 49.895077]
});

const marker1 = new mapboxgl.Marker({
    color: 'Red'
})
.setLngLat([-97.138451, 49.895077])
.addTo(map);



map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
map.addControl(new mapboxgl.NavigationControl(), 'top-right');
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }), 'top-left'
);
map.addControl(new mapboxgl.NavigationControl()); 

const button = document.querySelector('.button-locate');

button.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Oops...Geolocation is not supported by this browser');
    };
})

function showPosition(position) {
    const { latitude, longitude } = position.coords;
    map.flyTo({
        center: [longitude, latitude],
        zoom: 12
    });

    const userMarker = new mapboxgl.Marker({
        color: 'blue'
    })
    .setLngLat([longitude, latitude])
    .addTo(map);
}


    

