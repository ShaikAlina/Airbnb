
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    
    const marker1 = new mapboxgl.Marker({color : "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h4>${listing.title}</h4><p>Exact loaction provided after booking</p>`
        ))
        .addTo(map);


        // map.on('load', () => {
        //     // Load an image from an external URL.
        //     map.loadImage(
        //         '/assets/airbnb.png',
        //         (error, image) => {
        //             if (error) throw error;
    
        //             // Add the image to the map style.
        //             map.addImage('/assets/airbnb.png', image);
    
        //             // Add a data source containing one point feature.
        //             map.addSource('point', {
        //                 'type': 'geojson',
        //                 'data': {
        //                     'type': 'FeatureCollection',
        //                     'features': [
        //                         {
        //                             'type': 'Feature',
        //                             'geometry': {
        //                                 'type': 'Point',
        //                                 'coordinates': listing.geometry.coordinates
        //                             }
        //                         }
        //                     ]
        //                 }
        //             });
    
        //             // Add a layer to use the image to represent the data.
        //             map.addLayer({
        //                 'id': 'points',
        //                 'type': 'symbol',
        //                 'source': 'point', // reference the data source
        //                 'layout': {
        //                     'icon-image': 'cat', // reference the image
        //                     'icon-size': 0.25
        //                 }
        //             });
        //         }
        //     );
        // });
    
