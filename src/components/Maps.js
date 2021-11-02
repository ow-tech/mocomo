import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';


const covidData = [
    {id:1,
    cordinates:[-1.228440,36.910700]
    },
    {id:2,
    cordinates:[-1.345570, 36.742480]},
    {id:3,
    cordinates:[1.265190, 36.804770]},
    {id:4,
    cordinates:[-1.285790, 36.820030]},
  
  ]
  

const Maps =withScriptjs(withGoogleMap(()=> 

        <>
            <GoogleMap
            zoom={10}
            defaultCenter = {{lat:-1.292066, lng: 36.821945}}
            >
                 {
           covidData.map(area =>(

             <Marker key={area.id}
             position ={{lat: area.cordinates[0], lng: area.cordinates[1]}}/>
           ))
         }
            </GoogleMap>
        </>

))


export default Maps
