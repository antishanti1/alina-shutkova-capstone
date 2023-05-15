import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {format} from 'timeago.js';
import {  FaPizzaSlice, FaTshirt, FaCouch , FaMoneyBillAlt, FaHandsHelping, FaConnectdevelop} from "react-icons/fa";
import { BsFillHouseFill,  } from "react-icons/bs";
import axios from 'axios';
import './MainMap.scss';


export default function MainMap () {
  
    // const [currentUser, setCurrentUser] = useState(null);
    const [listings, setListings] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const [newListing, setNewListing] = useState(null);
    const [newListingName, setNewListingName] = useState("");
    const [newListingCategory, setNewListingCategory] = useState("");
    const [newListingTitle, setNewListingTitle] = useState("");
    const [newListingDescription, setNewListingDescription] = useState("");
    const [newListingQuantity, setNewListingQuantity] = useState("");
    const [newListingPhoneNumber, setNewListingPhoneNumber] = useState("");
    const [newListingEmail, setNewListingEmail] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

   

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
            username: newListingName,
            category: newListingCategory,
            title: newListingTitle,
            description: newListingDescription,
            quantity: newListingQuantity,
            phone_number: newListingPhoneNumber,
            email: newListingEmail,
            lat: newListing.lat,
            lng: newListing.lng,
        };
         try {
            const response = await axios.post('http://localhost:5050/api/listings', newPost);
            setListings([...listings, response.data]);
            setNewListing(null);
        } catch (error) {
            console.log(error);
        }
    } 


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/api/listings/${id}`);
            const newListings = listings.filter((listing) => listing._id !== id);
            setListings(newListings);
        } catch (error) {
            console.log(error);
        }
    }


    const categoryIconMapping = {
        "Food": <FaPizzaSlice
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }} />,
        "Clothes": <FaTshirt
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }}  />,
        "Household": <FaCouch 
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }} />,
        "Housing": <BsFillHouseFill 
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }} />,
        "Jobs": <FaMoneyBillAlt 
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }} />,
        "Services": <FaHandsHelping
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }}  />,
        "Other": <FaConnectdevelop 
        style={{
            cursor: "pointer",
            fontSize: "32px" 
          }} />,
    }
    
    return (


    <div style={{width: "100%", height: "100%"}}>
        <div className='map__filter' >
  <select
    value={selectedCategory || ''}
    onChange={(e) => setSelectedCategory(e.target.value || null)}
  >
    <option value="">All Categories</option>
    <option value="Food">Food</option>
    <option value="Clothes">Clothes</option>
    <option value="Household">Household</option>
    <option value="Housing">Housing</option>
    <option value="Jobs">Jobs</option>
    <option value="Services">Services</option>
    <option value="Other">Other</option>
  </select>
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
{listings
.filter((listing) => !selectedCategory || listing.category === selectedCategory)
.map( listing => (
    < React.Fragment key={listing._id}>
    <Marker 
    latitude={listing.lat} 
    longitude={listing.lng}
    onClick={(values) => {
        setPopupOpen({[listing._id]: true})
        setSelectedList(listing);
    }}
    >

       {/* <FaMapMarkerAlt  
         style={{
         fill:  "blue",
         cursor: "pointer",}}
       /> */}
        {(!selectedCategory || listing.category === selectedCategory) && (categoryIconMapping[listing.category])}
         {/* {categoryIconMapping[listing.category]} */}
       
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
                <p>Category: {selectedList?.category}</p>
                <p>Title: {selectedList?.title}</p>
                <p>Description: {selectedList?.description}</p>
                <p>Quantity: {selectedList?.quantity}</p>
                <p>Phone number: {selectedList?.phone_number}</p>
                <p>Email: {selectedList?.email}</p>
                <p>{format(selectedList?.createdAt)}</p>
                <button onClick={() => handleDelete(selectedList?._id)}>Delete</button>
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
                <label>Name</label>
                <input type="text" placeholder="Name" onChange={(e) => setNewListingName(e.target.value)} />
                <label>Category</label>
                <select onChange={(e) => setNewListingCategory(e.target.value)}> 
                    <option value="select">Select</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Household">Household</option>
                    <option value="Housing">Housing</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                </select>
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

