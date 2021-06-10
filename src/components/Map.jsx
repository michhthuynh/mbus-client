import { Container } from '@material-ui/core';
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const ConfigMap = (props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 10.823099, lng: 106.629662 }}>
      {props.isMarkerShown && <Marker position={{ lat: 10.823099, lng: 106.629662 }} />}
    </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(ConfigMap))

const Map = () => {
  return (
    <Container style={{ height: "80vh" }}>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAxOe2u517r_btbNZBbkXlURtoCtWff2X8"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </Container>
  );
};


export default Map;