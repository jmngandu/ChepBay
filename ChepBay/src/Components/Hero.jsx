import React from "react";
import Service from "../Service";
import data from "./data";

export default function Hero(props){
    const dataSet = data.map(item=>{
        return( 
        <Service
                displayImg={item.displayImg}
                title={item.title}
                description={item.description}
                price={item.price}
      />)
      })
    return(
        <>
        <div className="hero-section">
        <div className="home-section">
               <img src="/src/assets/homeimage.png" className="home-img"/>
               <h1>You ask we deliver</h1>
            </div>
            <div className="about-section">
                <h1>ABOUT US!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga perferendis architecto veritatis eveniet dignissimos voluptates dicta nobis, eligendi eaque quia illum quos! Tempora aspernatur expedita commodi sed quas omnis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat pariatur molestiae consequatur, atque laudantium eveniet excepturi quisquam deserunt ipsa facere aspernatur ex maxime. Impedit harum vel corrupti quisquam voluptate.</p>
            </div>
            <div className="Services-section">
                <h1>SERVICES WE OFFER!</h1>
                <div className="service-area">
                {dataSet}
                </div>
            </div>
            <div className="news-section">
                news
            </div>
        </div>
        </>
    )
}