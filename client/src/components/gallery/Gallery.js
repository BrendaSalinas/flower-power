import React from "react";
import "./gallery.css";

function Gallery ({img,link,name}) {
  return (

      <div className="gallery">

          <section className="flower-cards">

          <article className="flower-card">

            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="gallery-img"/>
            </a>
            
            <div className="card-text">
              <h4 className="flower-name">{name}</h4>
              <p className="flower-description">This is a post about this flower</p>
            </div>

          </article>

          </section>

  </div>

  )
}


export default Gallery