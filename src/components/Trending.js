import React, { useEffect, useState } from "react";
import './styles/Home.css';
import error from "./images/error.png";
import Loader from "./Loader";
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";



var IMG_URL = "https://image.tmdb.org/t/p/w500";

const Trend = ({moviedata})=>{
  const [trending , setTrend] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch(" https://api.themoviedb.org/3/trending/all/day?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      response => response.json()
    ).then(
      data => setTrend(data.results)
    )
    setTimeout(()=>{
      setLoading(false)
    },1200)
    
  },[])
   
   const handlechange = (event , value) =>{
     event.preventDefault()
     fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28&page=${value}`).then(
      response => response.json()
    ).then(
      data => setTrend(data.results)
    )
   }
  
     return(
      <>
      {loading ? <Loader/> :
      <div className="containerhome"> 
       <div className="content">
        {trending.map((movie)=>
          <div className="card" onClick={()=>moviedata(movie)}>
             {movie.poster_path ? <Link to="/overview"><img src={IMG_URL + movie.poster_path} alt="" /></Link> : <Link to="/overview"><img id="error" src={error} alt="error" /></Link>}
             <div id="title">
             <h2>{movie.title ?  movie.title : movie.name}</h2>
             </div>
          </div>   
       )}
       <div className="pagination">
       <Pagination count={10} onChange={handlechange} color="primary" />
       </div>
       <div className="credits">
         <div className="line"></div>
         <h6>MovieFlix By  <a href="https://www.instagram.com/chandrasekharan_cs/">@chandra shekar</a></h6>
       </div>
       </div>
       </div>
       }
      </>
);
}

export default Trend