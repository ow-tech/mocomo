import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

function LeaFletMap(props) {
    const [selectedDateData, setSelectedDateData] = useState([])


  function getColor(status) {
  let customColor = "blue";

  if (status =="Negative")
    customColor = "green";
  else if (status == "Positive")
    customColor = "red";
  
  let blueMarker = new L.icon({
    markerColor:customColor
  });}

    return (
      
        <>
         <MapContainer center={[-0.0887848, 34.7651153]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
         {(props.fetchedData !=null || props.fetchedData !=undefined) && props.fetchedData.filter(data =>
             data.status_result== "Negative").map(area => (
                <div>
                {(area.latitude !=null || area.latitude !=undefined) && (area.longitude !=null || area.longitude !=undefined) &&(
                    <>
                   
                    <Marker position={[area.latitude, area.longitude]} markerColor={()=>getColor(area.status_result)} >
                    <Popup>
                    {area.entity} - {area.status_result}
                    </Popup>
                    </Marker>
                    </>
                )}
                
                </div>

             ))}
        
            </MapContainer>
        </>)
}

export default LeaFletMap


