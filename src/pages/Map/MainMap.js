import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import  testData from '../../testData/test.json';
import {format} from 'timeago.js';
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';



export default function MainMap () {
    // const currentUser = "jerry";
    const [currentUser, setCurrentUser] = useState(null);
    const [listings, setListings] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const [newListing, setNewListing] = useState(null);
    const [newListingTitle, setNewListingTitle] = useState("");
    const [newListingDescription, setNewListingDescription] = useState("");
    const [newListingQuantity, setNewListingQuantity] = useState("");
    const [newListingPhoneNumber, setNewListingPhoneNumber] = useState("");
    const [newListingEmail, setNewListingEmail] = useState("");

    
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    

    const [viewport, setViewport] = useState({})
  

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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: currentUser,
            title: newListingTitle,
            description: newListingDescription,
            quantity: newListingQuantity,
            phone_number: newListingPhoneNumber,
            email: newListingEmail,
            lat: newListing.lat,
            lng: newListing.lng,
        };
         try {
            const response = await axios.post('http://localhost:5050/api/login', newPost);
            setListings([...listings, response.data]);
            setNewListing(null);
        } catch (error) {
            console.log(error);
        }
    } 

    const handleLogout = () => {
        setCurrentUser(null);
    }
    
    return (


    <div style={{width: "100%", height: "100%"}}>
        <Login />
        <div className="sidebar">
        {currentUser ? 
        (<button  onClick={handleLogout}> Log out</button>) : 
        
        ( <div>
        <button onClick={() => setShowLogin(true)}> Log in</button>
        <button onClick={() => setShowSignup(true)}> Sign up</button> 
        </div>)}

        {showSignup && <Register setShowSignup = {setShowSignup}/>}
        {showLogin && <Login setShowLogin = {setShowLogin}/>}
       {/* <Register /> */}
        {/* {showLogin && <Login />} */}
   

            </div>
        <ReactMapGL 
            initialViewState={{
                latitude: 25.7741728,
                longitude: -80.19362,
                zoom: 12
              }}
         {...viewport}
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
    longitude={listing.lng}
    onClick={(values) => {
        setPopupOpen({[listing._id]: true})
        setSelectedList(listing);
    }}
    >

       <FaMapMarkerAlt  
         style={{
         fill: listing.username === currentUser ? "yellow" : "blue",
        //  fontSize: viewport.zoom * 10,
         cursor: "pointer",}}
       />
       
    </Marker>

    {popupOpen[listing._id] && (
          <Popup
            latitude={selectedList?.lat}
            longitude={selectedList?.lng}
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
                <p>{format(selectedList?.createdAt)}</p>
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
          > <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Title" onChange={(e) => setNewListingTitle(e.target.value)} />
                <label>Description</label>
                <input type="text" placeholder="Description" onChange={(e) => setNewListingDescription(e.target.value)} />
                <label>Quantity</label>
                <input type="text" placeholder="Quantity" onChange={(e) => setNewListingQuantity(e.target.value)} />
                <label>Phone number</label>
                <input type="text" placeholder="Phone number"  onChange={(e) => setNewListingPhoneNumber(e.target.value)}/>
                <label>Email</label>
                <input type="text" placeholder="Email"  onChange={(e) => setNewListingEmail(e.target.value)}/>
                <button type="submit">Submit</button>
                
            </form>
          </div>
          </Popup>
)}


</React.Fragment>
))}


</ReactMapGL>


    </div>



    )
}

