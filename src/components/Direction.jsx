import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

import PropTypes from 'prop-types';


Direction.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  handleCurrent: PropTypes.func
};

Direction.defaultProps = {
  lat: 10.772230306775052,
  lng: 106.59197449625184,
  handleCurrent: null
}



function Direction(props) {
  const { lat, lng, handleCurrent } = props
  const [directions, setDirections] = useState('')

  const handleUpdateCurrent = data => {
    if (!handleCurrent) return
    handleCurrent(data)
  }

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = { lat: 10.74125936864197, lng: 106.61896422657834 };
    const destination = { lat: 10.843850585785676, lng: 106.61378211409107 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true,
        waypoints: [
          {
            location: new window.google.maps.LatLng(lat, lng),
          }
        ]
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result)
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    )
      .then(
        (response) => {
          handleUpdateCurrent(response.routes[0])
        }
      );

  }, [])

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 10.823099, lng: 106.629662 }}
      defaultZoom={13}
    >
      <DirectionsRenderer
        directions={directions}
      />
    </GoogleMap>
  ));



  return (
    <div>
      <GoogleMapExample
        containerElement={<Box width="100%" height="100vh" />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>


  );
}

export default Direction;