import React   from "react";
import './styles/Home.css';
import error from "./images/error.png";
import { Link } from "react-router-dom";
import { Pagination } from '@mui/material';
import Loader from "./Loader";
import Menu from './Menubar';
import Header from "./Header";

var IMG_URL = "https://image.tmdb.org/t/p/w500";

const Home = ({discover,pagedata , loading , moviedata,submitcall ,Trending , Movies,Tvshows,Homes,bookmark})=>{

 const handlechange = (e, value) =>{
     e.preventDefault();
      pagedata(value);
  }

   
     return(
      <>
       <div className="home">
       <div className="head_sect">
       <Header submitcall={submitcall}/>
       </div>
       <div className="containerhome"> 
       <Menu Trending={Trending} Movies={Movies} Homes={Homes} Tvshows={Tvshows} bookmark={bookmark}/>
       
       {loading ? <Loader/> 
       :
       <div className="content">
        {discover.map((movie)=>
          <div className="card" onClick={()=>moviedata(movie)}>
             {movie.poster_path ? <Link to="/overview"><img src={IMG_URL + movie.poster_path} alt="" /></Link> : <Link to="/overview"><img id="error" src={error} alt="error" /></Link>}
             <div id="title">
             <h2>{movie.title ?  movie.title : movie.name}</h2>
             </div>
          </div>   
       )}
       <div className="bottom_section">
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
       </div>
       </div>
       
       
       </>
);
}

export default Home;