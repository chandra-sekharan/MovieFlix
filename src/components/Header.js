import React, { useState } from 'react';
import './styles/Header.css';
import logo from './images/Movieflix.png';


const Header = (props) =>{
    const [search , setSearch] = useState('');
    
    const submithandler = (e)=>{
        e.preventDefault()
       props.submitcall(search);
    }
      
 const toggle = () =>{
    var menuicon  = document.getElementById('menuicon');
    menuicon.classList.toggle('active')
    var menu = document.getElementById('menu-bar');
    menu.classList.toggle('active')
  }
    return(
        <>
         <div className='header'>
            <div className='menubar'>
            <svg onClick={toggle} fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path  id="menuicon" d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"  /></svg>
            </div>
            <div className='logo'>
            <img src={logo} alt="" />
            </div>
            <form onSubmit={submithandler}>
                <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg></button>
            </form>
         </div>
        </>
    );
}

export default Header