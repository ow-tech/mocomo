import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';


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
  
  

const Maps =withScriptjs(withGoogleMap(()=> {
    const [selectedMark, setSelectedMarker] = useState(null)
    return (

        <>
            <GoogleMap
            zoom={10}
            defaultCenter = {{lat:-1.292066, lng: 36.821945}}
            >
                 {
                    covidData.map(area =>(

                        <Marker key={area.id}
                        position ={{lat: area.cordinates[0], lng: area.cordinates[1]}}
                        onClick={()=>{
                            setSelectedMarker(area)
                            ;
                        }}/>
                    ))
         }
                {selectedMark? (
                    <InfoWindow
                    position ={{lat: selectedMark.cordinates[0], lng: selectedMark.cordinates[1]}}
                    onCloseClick={()=>{setSelectedMarker(null)}}>
                        <div>{selectedMark.info}</div>

                    </InfoWindow>
                ): null}
            </GoogleMap>
        </>
    )
        }))


export default Maps
