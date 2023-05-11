import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import  testData from '../../testData/test.json';
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';


export default function MainMap () {
    const currentUser = "jerry";
    const [listings, setListings] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const [newListing, setNewListing] = useState(null);

    const [viewport, setViewport] = useState({
        
        latitude: 25.7741728,
        longitude: -80.19362,
        width: "100%",
        height: "100%",
        zoom: 12,
        
    })
  

    useEffect(() => {
     const getListings = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/listings');      
            setListings(response.data);    
     }catch (error) {
         console.log(error);
     }
    };
    getListings();
    },[]);


    const handleAddClick = (e) => {
        const { lng, lat } = e.lngLat;
        console.log(lng, lat);
        setNewListing({
            lng: lng,
            lat: lat,
        });
    }
    
    
    return (

        
//     <div style={{width: "100%", height: "100%"}}>

// </div>




 
    <div style={{width: "100%", height: "100%", position:'relative'}}>
        <ReactMapGL 
         {...viewport}
         width="100%"
         height="100%"
           onViewportChange={newViewport => {
         setViewport(newViewport);
            }}
        mapboxAccessToken={"pk.eyJ1IjoiYXNodXRrb3ZhIiwiYSI6ImNsaGdvMWllbzA2cWUzbG56cHd0OWNiMXIifQ.OY3xKwqI9zbx6aflRvdEtw"}
      
            mapStyle="mapbox://styles/ashutkova/clhgnu8xz000i01qtdusxcett"
     onDblClick={handleAddClick}

>
{listings.map( listing => (
    < React.Fragment key={listing._id}>
    <Marker 
    latitude={listing.lat} 
    longitude={listing.long}
    onClick={(values) => {
        setPopupOpen({[listing._id]: true})
        setSelectedList(listing);
    }}
    >

       <FaMapMarkerAlt  
         style={{
         fill: listing.username === currentUser ? "yellow" : "blue",
         fontSize: viewport.zoom * 3,
         cursor: "pointer",}}
       />
       
    </Marker>

    {popupOpen[listing._id] && (
          <Popup
            latitude={selectedList?.lat}
            longitude={selectedList?.long}
            onClose={() => {
                setSelectedList(null)
                setPopupOpen(false)
            }}
            closeOnClick={false}
            
            anchor="top"
          >
            <div>
                <p> {selectedList?.username}</p>
                <p>Title: {selectedList?.title}</p>
                <p>Description: {selectedList?.description}</p>
                <p>Quantity: {selectedList?.quantity}</p>
                <p>Phone number: {selectedList?.phone_number}</p>
                <p>Email: {selectedList?.email}</p>
            </div>
          </Popup>
        )}
{ newListing && (


<Popup
            latitude={newListing.lat}
            longitude={newListing.lng}
            onClose={() => {
                setSelectedList(null)
                setPopupOpen(false)
                setNewListing(null) 
            }}
            closeOnClick={false}
            
            anchor="top"
          >test</Popup>
)}


</React.Fragment>
))}


</ReactMapGL>


    </div>



    )
}

