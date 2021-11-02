import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

// ensuring the map component loads needed dependencies and what not

const Maps =withScriptjs(withGoogleMap(()=> 
        <>
            <GoogleMap
            zoom={10}
            defaultCenter = {{lat:-1.286330, lng: 36.967250}}
            />
        </>

))


export default Maps
