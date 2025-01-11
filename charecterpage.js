import React from "react";
import Movie from "./Movie";
import { movies } from "./moviesList";
import { useParams } from "react-router";
import { celebrities } from './celebritiesData';
import NameInfo from "./nameinfo";
import MediaSection from "./mediasection";
import './interface.css'
import Navbar from "../Homepage/facenavbar";
import Navbar2 from "./navbar";


const Charecterpage = () => {
  const { name } = useParams();

  const celebrity = celebrities.find((celeb) => celeb.name === name);
 
  if (!celebrity) {
    return <h2>Error: Celebrity not found</h2>;
  }

  return (
  
    <div>
      <Navbar2/>
      
      <div className="bradpro">
        
        <NameInfo name={celebrity.name} />
        <MediaSection
          imageSrc={celebrity.imageSrc}
          imageAlt={celebrity.imageAlt}
          videoPoster={celebrity.videoPoster}
          videoSrcMp4={celebrity.videoSrcMp4}
          videoSrcOgg={celebrity.videoSrcOgg}
          videoSrcWebm={celebrity.videoSrcWebm}
          videoDescription={celebrity.videoDescription}
        />
      </div>

     
      <section className="movies p-4">
        <h1 className="heading">Movies</h1>
        <div className="movies-container d-flex justify-content-center flex-wrap">
          {movies[name]?.map((movie, index) => (
            <Movie
              key={index}
              title={movie.title}
              rate={movie.rate}
              summary={movie.summary}
              picture={movie.picture}
              desc={movie.desc}
              link={movie.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Charecterpage;