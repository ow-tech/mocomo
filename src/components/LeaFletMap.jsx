import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

function LeaFletMap(props) {
    const [selectedDateData, setSelectedDateData] = useState([])
console.log(props.fetchedData)

    // props.fetchedData.forEach(d => {d.date= d.date.split("-").reverse().join("-")})
    // const filteredData = props.fetchedData.filter(data => 
    //      data.date=== "18-06-2021");
    // setSelectedDateData(filteredData)


    

   

    const covidData = [
    {id:1,
    cordinates:[-1.228440,36.910700],
    info:"Covid cases in Kasarani"
    },
    {id:2,
    cordinates:[-1.345570, 36.742480],
    info:"Covid cases in Langata"},
    {id:3,
    cordinates:[1.265190, 36.804770],
    info:"Covid cases in Utawala"},
    {id:4,
    cordinates:[-1.285790, 36.820030],
    info:"Covid cases in Zimmerman"},
  
  ]

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
                    {area.status_result}
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


