import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LeaFletMap() {

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
    return (
      
        <>
            <MapContainer center={[-1.292066, 36.821945]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {covidData.map(area=>(
                      <Marker position={[area.cordinates[0], area.cordinates[1]]}>
                      <Popup>
                          {area.info}
                      </Popup>
                  </Marker>

                ))}
              
            </MapContainer>
            
        </>
    )
}

export default LeaFletMap
