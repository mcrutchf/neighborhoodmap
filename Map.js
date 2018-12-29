import React, {Component} from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow, } from "react-google-maps"

/* global google */

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
  <GoogleMap
    zoom={props.zoom}
    defaultCenter={{ lat: 38.9072, lng: -77.0369 }}
    
   
    
    >

    {props.markers && 
    props.markers.filter(marker => marker.isVisible)
    .map((marker, idx, arr) => {
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
        
        return(
    <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} 
    onClick ={() => props.handleMarkerClick(marker)}
    animation={arr.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
    
    >
   {marker.isOpen && venueInfo.bestPhoto && (
       <InfoWindow>
           <React.Fragment>
               <img src ={`${venueInfo.bestPhoto.prefix}300x300${venueInfo.bestPhoto.suffix}`} 
              alt={"The Venue"}/>
       <p>{venueInfo.name}</p>
      <p>{venueInfo.location.address}</p>
       </React.Fragment>
       </InfoWindow>
   )}
</Marker>
   
   
   );
})}
  </GoogleMap>
))
);



export default class Map extends Component {
    render() {
        return (
        <MyMapComponent
  {...this.props}
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCyxgBhz_tqidah1csyKLsU8V5Ka84XWPk"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `95%`, width: `100%` }} />}
  mapElement={<div style={{ height: `95%`, width: `100%` }} />}
/>
);
    }
    
}