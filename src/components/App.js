import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Menu from './Menubar';
import './styles/App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Trend from './Trending';
import Movies from './Movies';
import Tvshows from './Tvshows';
import Overview from './Overview';
import Tvoverview from './Tvoverview';
import Bookmark from './Bookmark';



const overview = JSON.parse(localStorage.getItem('movieflix-overview'));

const  App = () => {
  const [discover, setDiscover] = useState([]);
  const [loading , setLoading] = useState(false);
  const [Movie , setMovie] = useState(overview);
  const [book , setbook] = useState([]);
  
     
  useEffect(()=>{
    setLoading(true)
     fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      Response => Response.json()
    ).then(
      data => setDiscover(data.results)
    
    )
    setTimeout(()=>{
      setLoading(false)
    },1200)
  
    },[])

 
 const submitdata=(data) =>{
   if(data){
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28&query=${data}`).then(
    Response => Response.json()
     ).then(
      data => setDiscover(data.results)
     )
     setTimeout(()=>{
        setLoading(false)
      },1200)
    }
    else{
      alert("Required")
    }
  }
   
  const pagedata = (value)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28&page=${value}`).then(
     Response => Response.json()
     ).then(
     data => setDiscover(data.results) 
     )   
  }

  const moviedata = (movie) =>{
     setMovie(movie);
     
  }
  
  const savetolocal = (items) =>{
    localStorage.setItem('movieflix' , JSON.stringify(items));       
  }
   
  useEffect(()=>{
    const favourites = localStorage.getItem('movieflix');
    if(favourites){
      setbook(JSON.parse(favourites));
    }
    else{
      setbook([]);
    }
  },[])

  const handlebook = (movie)=>{
    const favourite = [...book , movie];
    setbook(favourite);
    savetolocal(favourite);
  }

  useEffect(()=>{
    localStorage.setItem('movieflix-overview' , JSON.stringify(Movie));       
  },[Movie])

  
 
console.log(book)

  return (
    <BrowserRouter>
     <div>
      <Header submitcall={submitdata}/>
      <div className='container'>
       <Menu/>
       <Routes>
        <Route path='/' element={<Home discover={discover} pagedata={pagedata} loading={loading} moviedata={moviedata} />  } />
        <Route path='/Trending' element={ <Trend moviedata={moviedata}/> } />
        <Route path='/Movies' element={ <Movies moviedata={moviedata} /> } />
        <Route path='/Tvshows' element={ <Tvshows moviedata={moviedata}/> } />
        <Route path='/search' element={ <Home/> } />
        <Route path='/overview' element={ <Overview Movie={Movie} handlebook={handlebook} /> } />
        <Route path='/tvoverview' element={ <Tvoverview Movie={Movie} handlebook={handlebook} /> } />
        <Route path='/bookmark' element={<Bookmark book={book} moviedata={moviedata}  />} />
       </Routes>
      </div>
     </div>
     </BrowserRouter>
  );
}



export default App;
