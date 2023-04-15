import React, { useState } from "react";
import './styles/overview.css';
import Button from '@mui/material/Button';
import rating from './images/star.png';
import {useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import Loader  from './Loader';
import { useEffect } from "react";

var IMG_URL = "https://image.tmdb.org/t/p/w500";

const Overview = ({Movie , handlebook})=>{
      const [videourl , setvideourl] = useState([]);
      const navigate = useNavigate();     
      var [loadings , setloadings] = useState(true)
      
useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/${Movie.id}/videos?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28&append_to_response=videos`).then(
    Response => Response.json()
  ).then(
    data => setvideourl(data) 
  )
  setTimeout(()=>{
    setloadings(false)
  },1500)
},[])
 

const getkey = ()=>{
  if(videourl.results)
    {
     const keyvalue = videourl.results.find(vid => vid.type === 'Trailer') 
     return keyvalue
   }
   
}
  
  const key = getkey();
 
 
const opts = {
      height: '500px',
      width: '840px',
    };
    
function marked(){
       var bookmark = document.getElementsByClassName('bookmark')[0];
       bookmark.classList.toggle("active");

    }
    
    return(
        <> 
        {loadings ? <Loader/> :
         <div className="mainoverview">
             <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
             <div className="overview">
             <div className="movieposter">
               <div className="movieimage">
               <img src={IMG_URL + Movie.poster_path} alt="" />
               </div>
               <div className="description_section">
               <div className="title">
                 <h1>{Movie.title ?  Movie.title : Movie.name}</h1>
               </div>
               <div className="date">
                <h3>Release Date :{Movie.release_date ? Movie.release_date : Movie.first_air_date }</h3>
                </div>
                </div>                
                <div className="rating-sec">
               <img src={rating} alt="" className="rating" />
               <h5>{Movie.vote_average}</h5>
               </div>
                
              </div>
             <div className="des-section">
             <div className="description">
                <p>{Movie.overview}</p>            
             </div>
             <div className="bookmarks">
             <span onClickCapture={marked} className="bookmark" onClick={()=>handlebook(Movie)}> <svg fill="red" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"/></svg>Bookmark</span>
             </div>
             </div>
             <div className="video_section">
             <div className="video">
               <YouTube videoId={key? key.key : null} opts={opts} className="videoplayer"/>
             </div>
             </div>
             </div>
         </div>
         }
        </>
    );
}

export default Overview