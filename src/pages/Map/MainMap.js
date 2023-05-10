import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import  testData from '../../testData/test.json';
import { FcLike } from "react-icons/fc";
import axios from 'axios';


export default function MainMap () {
    const [listings, setListings] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 25.7741728,
        longitude: -80.19362,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    })

    // const [selectedList, setSelectedList] = useState(null);

    useEffect(() => {
     const getListings = async () => {
        try {
            // const response = await axios.get('http://localhost:5050/api/listings');    
            const response = await axios.get('/listings');    
            setListings(response.data);    
     }catch (error) {
         console.error(error);
     }
    };
    getListings();
    },[])



    return (
 
    <div style={{width: "100%", height: "100%"}}>
        <ReactMapGL 
         {...viewport}
        mapboxAccessToken={"pk.eyJ1IjoiYXNodXRrb3ZhIiwiYSI6ImNsaGdvMWllbzA2cWUzbG56cHd0OWNiMXIifQ.OY3xKwqI9zbx6aflRvdEtw"}
       
        onViewportChange={newViewport => {
         setViewport(newViewport);
            }}
            mapStyle="mapbox://styles/ashutkova/clhgnu8xz000i01qtdusxcett"
>
{listings.map((listing) => (
    <Marker key={listing.id} 
    latitude={listing.latitude} 
    longitude={listing.longitude}>

       <button className="marker-btn" onClick={(e) => { 
              e.preventDefault();
              setListings(listing);
       }}
      > 
       <FcLike />
        </button>
    </Marker>

        //   <Popup
        //     latitude={listing.latitude}
        //     longitude={selectedList.longitude}
        //     onClose={() => setSelectedList(null)}
        //     closeOnClick={false}
        //     anchor="top"
        //   >
        //     <div>
        //         <p>Title: {selectedList.title}</p>
        //         <p>Description: {selectedList.description}</p>
        //         <p>Quantity: {selectedList.quantity}</p>
        //         <p>Phone number: {selectedList.phone_number}</p>
        //         <p>Email: {selectedList.email}</p>
        //     </div>
        //   </Popup>


))}



   
{/* {selectedList && (
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
        )} */}

</ReactMapGL>


    </div>



    )
}

