import React  from "react";
import './styles/Home.css';
import error from "./images/error.png";
import { Link } from "react-router-dom";




var IMG_URL = "https://image.tmdb.org/t/p/w500";

const Bookmark = ({book,moviedata})=>{

 
     return(
      <>
       
       <div className="containerhome"> 
       <div className="content">   
         {book.map((movie)=>
          <div className="card" onClick={()=>moviedata(movie)}>
             {movie.poster_path ? <Link to="/overview"><img src={IMG_URL + movie.poster_path} alt="" /></Link> : <Link to="/overview"><img id="error" src={error} alt="error" /></Link>}
             <div id="title">
             <h2>{movie.title ?  movie.title : movie.name}</h2>
             </div>
          </div>   
         )}
       <div className="credits">
         <div className="line"></div>
         <h6>MovieFlix By  <a href="https://www.instagram.com/chandrasekharan_cs/">@chandra shekar</a></h6>
       </div>
       </div>
       </div>
       
       
       </>
);
}

export default Bookmark;
