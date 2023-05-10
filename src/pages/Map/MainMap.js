import React, {useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import  testData from '../../testData/test.json';
import { FcLike } from "react-icons/fc";


export default function MainMap () {
    const [viewport, setViewport] = useState({
        latitude: 25.7741728,
        longitude: -80.19362,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    })

    const [selectedList, setSelectedList] = useState(null);


    return (
 
    <div style={{width: "100%", height: "100%"}}>
        <ReactMapGL 
         {...viewport}
        mapboxAccessToken={"pk.eyJ1IjoiYXNodXRrb3ZhIiwiYSI6ImNsaGdvMWllbzA2cWUzbG56cHd0OWNiMXIifQ.OY3xKwqI9zbx6aflRvdEtw"}
       
        onViewportChange={newViewport => {
         setViewport(newViewport);
         console.log(newViewport);
            }}
            mapStyle="mapbox://styles/ashutkova/clhgnu8xz000i01qtdusxcett"
>
{testData.listings.map((listing) => (
    <Marker key={listing.id} latitude={listing.latitude} longitude={listing.longitude}>
       <button className="marker-btn" onClick={(e) => { 
              e.preventDefault();
              setSelectedList(listing);
       }}
      > 
       <FcLike />
        </button>
    </Marker>
))}


{selectedList && (
          <Popup
            latitude={selectedList.latitude}
            longitude={selectedList.longitude}
            onClose={() => setSelectedList(null)}
            closeOnClick={false}
            anchor="top"
          >
            <div>
                <p>Title: {selectedList.title}</p>
                <p>Description: {selectedList.description}</p>
                <p>Quantity: {selectedList.quantity}</p>
                <p>Phone number: {selectedList.phone_number}</p>
                <p>Email: {selectedList.email}</p>
            </div>
          </Popup>
        )}

</ReactMapGL>


    </div>



    )
}

