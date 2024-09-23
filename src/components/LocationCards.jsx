import React from "react";
import ReactDOM from "react-dom"

const LocationCards = (props) => {

  return (
    <div className= "location-card">
    <img src={props.image} alt={props.name} style={{ width: '100%', height: 'auto' }} />
    <p>{props.name}</p>
    <p>{props.cuisine}</p>
    <a href = {props.link}>
      <button className = "more information">More Information</button>
    </a>
    </div>
  )
}

export default LocationCards