import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { format } from 'timeago.js';
import { FaPizzaSlice, FaTshirt, FaCouch, FaMoneyBillAlt, FaHandsHelping, FaConnectdevelop } from "react-icons/fa";
import { BsFillHouseFill, } from "react-icons/bs";
import axios from 'axios';
import './MainMap.scss';
import mapboxgl from "mapbox-gl"; 
import Nav from '../../components/Nav/Nav';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function MainMap() {

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
  const [isHovered, setIsHovered] = useState(false);
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/dark-v11");
  const darkStyle = "mapbox://styles/mapbox/dark-v11";
  const lightStyle = "mapbox://styles/mapbox/light-v11";

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await axios.get('https://dopomoha.herokuapp.com/api/listings');
        setListings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListings();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



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
      const response = await axios.post('https://dopomoha.herokuapp.com/api/listings', newPost);
      setListings([...listings, response.data]);
      setNewListing(null);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dopomoha.herokuapp.com/api/listings/${id}`);
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
        fontSize: "40px",
        fill: mapStyle === lightStyle ? '#FDE12D' : 'lightyellow',
      }} />,
    "Clothes": <FaTshirt
      style={{
        cursor: "pointer",
        fontSize: "40px",
        fill: mapStyle === lightStyle ? '#2C82B5' : 'lightblue'
      }} />,
    "Household": <FaCouch
      style={{
        cursor: "pointer",
        fontSize: "40px",
        fill: mapStyle === lightStyle ? '#74226C' : 'lightpink'
      }} />,
    "Housing": <BsFillHouseFill
      style={{
        cursor: "pointer",
        fontSize: "40px",

        fill: mapStyle === lightStyle ? '#EF8354' : '#f9d998'
      }} />,
    "Jobs": <FaMoneyBillAlt
      style={{
        cursor: "pointer",
        fontSize: "40px",
        fill: mapStyle === lightStyle ? '#288F00' : '#c9eec9'
      }} />,
    "Services": <FaHandsHelping
      style={{
        cursor: "pointer",
        fontSize: "40px",
        fill: mapStyle === lightStyle ? '#BE37B0' : '#D8BFD8'
      }} />,
    "Other": <FaConnectdevelop
      style={{
        cursor: "pointer",
        fontSize: "40px",
        fill: mapStyle === lightStyle ? 'black' : 'white'
      }} />,
  }

  return (

    <div style={{ width: "100%", height: "100%" }}>
      <div className='map__filter' >

        <div className='map__filter-selector'>

          <select className='map__filter-select'
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value=""> ALL CATEGORIES</option>
            <option value="Food">FOOD</option>
            <option value="Clothes">CLOTHES</option>
            <option value="Household">HOUSEHOLD</option>
            <option value="Housing">HOUSING</option>
            <option value="Jobs">JOBS</option>
            <option value="Services">SERVICES</option>
            <option value="Other">OTHER</option>
          </select>
          <span className='map__filter-arrow'> </span>
        </div>

        <div className='map__filter-switch'>
          <input className='t-input' type="checkbox"
            checked={mapStyle === lightStyle}
            onChange={() =>
              setMapStyle(mapStyle === lightStyle ? darkStyle : lightStyle)
            } id="switch" />
          <label className='t-label' for="switch">Toggle</label>
        </div>


      </div>
      <div 
      
      className={`nav-container ${isHovered ? 'visible' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Nav /></div>

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
     
        mapboxAccessToken={"pk.eyJ1IjoiYXNodXRrb3ZhIiwiYSI6ImNsaGduYnVtNzBhNmgzZ3Joc3Y4aDZ5Zm4ifQ.chMAXW-muUbStSja3v5htA"}
        mapStyle={mapStyle}
        onDblClick={handleAddClick}

      >
        {listings
          .filter((listing) => !selectedCategory || listing.category === selectedCategory)
          .map(listing => (
            < React.Fragment key={listing._id}>
              <Marker
                latitude={listing.lat}
                longitude={listing.lng}
                onClick={(values) => {
                  setPopupOpen({ [listing._id]: true })
                  setSelectedList(listing);
                }}
              >

                {(!selectedCategory || listing.category === selectedCategory) && (categoryIconMapping[listing.category])}

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
                  anchor="top" >
                  <div className='map__popup'>
                    <p className='map__popup--bold map__popup--name'> {selectedList?.username}</p>
                    <p> <span className='map__popup--bold'>Category:</span>  {selectedList?.category}</p>
                    <p><span className='map__popup--bold'>Title:</span>  {selectedList?.title}</p>
                    <p><span className='map__popup--bold'>Description:</span>  {selectedList?.description}</p>
                    <p><span className='map__popup--bold'>Quanity:</span>  {selectedList?.quantity}</p>
                    <p><span className='map__popup--bold'>Phone Number:</span>  {selectedList?.phone_number}</p>
                    <p className='map__popup--info'> <span className='map__popup--bold'>Email:</span> {selectedList?.email}</p>
                    <p>{format(selectedList?.createdAt)}</p>
                    <button class="button" onClick={() => handleDelete(selectedList?._id)}><span>Picked up</span></button>
                  </div>
                </Popup>
              )}
              {newListing && (

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
                    <form className='map__submit' onSubmit={handleSubmit}>
                      <label>Name</label>
                      <input className='map__submit-input' type="text" placeholder="Name" required onChange={(e) => setNewListingName(e.target.value)} />
                      <label>Category</label>
                      <select className='map__submit-sel' required onChange={(e) => setNewListingCategory(e.target.value)}>
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
                      <input className='map__submit-input' type="text" placeholder="Title" required onChange={(e) => setNewListingTitle(e.target.value)} />
                      <label>Description</label>
                      <input className='map__submit-input' type="text" placeholder="Description" required onChange={(e) => setNewListingDescription(e.target.value)} />
                      <label>Quantity</label>
                      <input className='map__submit-input' type="text" pattern="\d+" placeholder="Quantity" required title="Please enter a valid quantity (numbers only)" onChange={(e) => setNewListingQuantity(e.target.value)} />
                      <label>Phone number</label>
                      <input className='map__submit-input' type="text" placeholder="Phone number" pattern="\d+" required title="Please enter a valid quantity (numbers only)" onChange={(e) => setNewListingPhoneNumber(e.target.value)} />
                      <label>Email</label>
                      <input className='map__submit-input map__submit--pad' type="text" placeholder="Email" required onChange={(e) => setNewListingEmail(e.target.value)} />
                      <button className='button ' type="submit"><span>Submit</span></button>
 
                    </form>
                  </div>
                </Popup>
              )}

            </React.Fragment>
          ))}

      </ReactMapGL>

    </div>)
}

