import React from 'react';
import './Movie.css';

const Movie=(props)=>{
  return(

<div className="movie col-md-6 col-lg-4">
      <div className="mov-top d-flex align-items-center">
        <div className="mov-image">
          <img src={props.picture} alt={props.desc}/>
        </div>
        <div className="title-review">
          <a href={props.link} target="_blank"><h4>{props.title}</h4></a>
          <span>{props.rate}</span>
        </div>
      </div>
      <div className="mov-bottom mt-3">
        <div className="summary">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>

  )
}
export default Movie