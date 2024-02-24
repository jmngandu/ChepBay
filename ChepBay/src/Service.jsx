import React from "react";

export default function Service(props){
    return(
    <>
    <div className="service-card">
       <img src={`src/assets/images/${props.displayImg}`} className="service-image" />
       <p className="service-title"><span className="bold boldl">{props.title}</span></p>
       <p className="description">{props.description}</p>
       <p className="price"><span className="bold">From ${props.price}</span> / Item</p>
       </div>
    </>
    )
}