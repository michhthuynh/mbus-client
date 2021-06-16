import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import PropTypes from 'prop-types';

const ConfigMap = (props) => {
  const { position } = props

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 10.823099, lng: 106.629662 }}
    >
      {props.isMarkerShown && <Marker position={position.current} />}
      {props.isMarkerShown && <Marker position={position.start} icon={{ url: "/start.svg", scaledSize: new window.google.maps.Size(25, 25) }} />}
      {props.isMarkerShown && <Marker position={position.stop} icon={{ url: "/stop.svg", scaledSize: new window.google.maps.Size(25, 25) }} />}
    </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(ConfigMap))

Map.propTypes = {
  position: PropTypes.object.isRequired,
}

Map.defaultProps = {
  position: {
    current: {},
    stop: {},
    start: {}
  }
}
function Map(props) {
  const { position } = props
  return (
    <div style={{ height: "calc(100vh - 64px)", padding: "0", width: "100%" }}>
      <WrappedMap
        position={position}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAxOe2u517r_btbNZBbkXlURtoCtWff2X8"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};



export default Map;
