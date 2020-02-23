import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

function getBoundsZoomLevel(bounds, mapDim) {
    var WORLD_DIM = { height: 256, width: 256 };
    var ZOOM_MAX = 21;

    function latRad(lat) {
        var sin = Math.sin(lat * Math.PI / 180);
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }

    function zoom(mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    }

    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;

    var lngDiff = ne.lng() - sw.lng();
    var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

    var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
}

const Map = withGoogleMap((props) => {
    var bounds = new window.google.maps.LatLngBounds();
    if(!props.children || props.children.length === 0) {
        return null;
    }

    for(var marker of ((props.children.length && props.children) || [props.children])) {
        var latLng = new window.google.maps.LatLng(marker.props.position.lat, marker.props.position.lng);
        bounds.extend(latLng);
    }

    var center = bounds.getCenter();
    var zoom = getBoundsZoomLevel(bounds, { width: 400, height: 400 });

    return <GoogleMap
        center={{ lat: center.lat(), lng: center.lng() }}
        zoom={zoom}
        {...props}
    />;
});

export default (props) => <Map
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    {...props} />;
