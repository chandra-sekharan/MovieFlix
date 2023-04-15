import React,{useState} from "react";
import './styles/menu.css';
import {Link} from 'react-router-dom';


const Menu = ({Trending,Homes,Movies,Tvshows}) => {

 const [rotateChevron, setRotateChevron] = useState(false);
/****************************************************************************/    
function toggleswitch(){
    var fill = document.getElementsByClassName('fill');
    fill[0].classList.add('active')
    fill[1].classList.remove('active')
    fill[2].classList.remove('active')
    fill[3].classList.remove('active')
    fill[4].classList.remove('active')
  }
  function toggleswitch1(){
    var fill = document.getElementsByClassName('fill');
    fill[1].classList.add('active')
    fill[0].classList.remove('active')
    fill[2].classList.remove('active')
    fill[3].classList.remove('active')
    fill[4].classList.remove('active')
 }
 function toggleswitch2(){
    var fill = document.getElementsByClassName('fill');
    fill[2].classList.add('active')
    fill[1].classList.remove('active')
    fill[0].classList.remove('active')
    fill[3].classList.remove('active')
    fill[4].classList.remove('active')
 }
 function toggleswitch3(){
    var fill = document.getElementsByClassName('fill');
    fill[3].classList.add('active');
    fill[0].classList.remove('active')
    fill[1].classList.remove('active')
    fill[2].classList.remove('active')
    fill[4].classList.remove('active')
 }
 function toggleswitch4(){
    var fill = document.getElementsByClassName('fill');
    fill[4].classList.add('active')
    fill[0].classList.remove('active')
    fill[3].classList.remove('active')
    fill[2].classList.remove('active')
    fill[1].classList.remove('active')
 }
 const handleRotate = () => setRotateChevron(!rotateChevron);
 
 function openPop(){
    var popup = document.getElementsByClassName('settingPopup')[0];
       popup.classList.toggle('active')
  
 }
 const theme = () =>{
    document.body.classList.toggle('dark');
 }

/*****************************************************************************/
  return(
        <>
   
        <div className="menu-bar" id="menu-bar">
          <div className="menu_fixer">
            <div className="menu-items" onClickCapture={toggleswitch} onClick={Homes}>
            <div className="icons">
            <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path className="fill active" d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"/></svg>
            </div> 
            <div className="menu-name" >
            <li id="text">Home</li>
            </div>
            </div>
            <div className="menu-items" onClickCapture={toggleswitch1} onClick={Trending} >
            <div className="icons">
            <svg version="1.1" fill="#fff" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.27 122.88" width="24px" height="24px"><g><path className="fill" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/><path className="trending" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/></g></svg>
            </div>
            <div className="menu-name" >
            <li>Trending</li>
            </div>
            </div>
            <div className="menu-items" onClickCapture={toggleswitch2} onClick={Movies} >
            <div className="icons">
            <svg fill="#fff"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.1 122.88" width="24px" ><path className="fill" d="M17.83,9.22A17.84,17.84,0,1,1,5.22,14.45,17.82,17.82,0,0,1,17.83,9.22Zm-.22,38.49H70.19a8.88,8.88,0,0,1,8.86,8.86V95.1A8.89,8.89,0,0,1,70.19,104H53.94l11.8,18.92h-11L41.89,105.59l-13,17.29H17.76L29.48,104H17.61A8.89,8.89,0,0,1,8.75,95.1V56.57a8.88,8.88,0,0,1,8.86-8.86Zm38,30.06c1.86-1.2,1.85-2.53,0-3.59l-19.18-11c-1.52-.95-3.09-.39-3,1.59L33.44,87c.13,2.14,1.35,2.73,3.15,1.74l19-11ZM84.08,90V61.53l24-14.17v57.16L84.08,90ZM60.62,0A22.43,22.43,0,1,1,44.75,6.57,22.38,22.38,0,0,1,60.62,0Z"/></svg>
            </div>
            <div className="menu-name">
            <li>Movies</li>
            </div>
            </div>
            <div className="menu-items" onClickCapture={toggleswitch3} onClick={Tvshows} >
            <div className="icons">
            <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 122.88 114.57"><g><path className="fill" id="tvshows" d="M3.34,30.91h46.22l-7.99-13.84c0.77-3.85,3.01-5.15,6.73-3.89l10.23,17.73h4.04L80.78,0.35 c3.51-0.9,6.12-0.23,6.74,3.89L71.64,30.91h47.91c1.84,0,3.34,1.5,3.34,3.34v76.98c0,1.83-1.5,3.34-3.34,3.34H3.34 c-1.84,0-3.34-1.5-3.34-3.34V34.25C0,32.42,1.5,30.91,3.34,30.91L3.34,30.91z M105.39,102.06c2.4,0,4.35,1.95,4.35,4.35 c0,2.4-1.95,4.35-4.35,4.35c-2.4,0-4.35-1.95-4.35-4.35C101.05,104.01,102.99,102.06,105.39,102.06L105.39,102.06z M9.03,103.01 h32.67c0.5,0,0.91,0.41,0.91,0.92v4.95c0,0.5-0.41,0.92-0.91,0.92H9.03c-0.5,0-0.91-0.41-0.91-0.92v-4.95 C8.12,103.43,8.53,103.01,9.03,103.01L9.03,103.01L9.03,103.01z M10.8,38.56h101.27c1.48,0,2.69,1.2,2.69,2.66v53.85 c0,1.46-1.21,2.66-2.69,2.66H10.8c-1.48,0-2.69-1.2-2.69-2.66V41.22C8.12,39.76,9.32,38.56,10.8,38.56L10.8,38.56z"/></g></svg>
            </div>
            <div className="menu-name">
            <li>TV Shows</li>
            </div>
            </div>
            <div className="menu-items" onClickCapture={toggleswitch4}  >
            <div className="icons">
            <Link to="/bookmark"><svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path className="fill" id="click" d="M 7 2 C 5.3550302 2 4 3.3550302 4 5 L 4 19 C 4 20.64497 5.3550302 22 7 22 L 20 22 L 20 20 L 7 20 C 6.4349698 20 6 19.56503 6 19 C 6 18.43497 6.4349698 18 7 18 L 20 18 L 20 16 L 20 2 L 16 2 L 10 2 L 7 2 z M 7 4 L 10 4 L 10 12.123047 L 11.574219 11.019531 L 13 10.017578 L 16 12.123047 L 16 4 L 18 4 L 18 16 L 7 16 C 6.6481575 16 6.3148915 16.07394 6 16.1875 L 6 5 C 6 4.4349698 6.4349698 4 7 4 z M 12 4 L 14 4 L 14 8.2773438 L 13 7.5761719 L 12 8.2773438 L 12 4 z"/></svg></Link>
            </div>
            <div className="menu-name">
            <Link to="/bookmark"><li>Bookmark</li></Link>
            </div>
            </div>
            <div className="menu-items" id="footer" onClickCapture={handleRotate} onClick={openPop}>
            <div className="icons">
            <i id="setting" className={`fa-solid fa-gear ${rotateChevron ? "rotate" :''}`}></i>
            </div>
            <div className="menu-name">
            <li>Settings</li>
            </div>
            </div>
            </div>
             <div className="settingPopup">
               <input type="checkbox" class="checkbox" id="checkbox"  onClick={theme}/>
               <label for="checkbox" class="label">
               <i class="fas fa-moon"></i>
               <i class='fas fa-sun'></i>
               <div class='ball'></div>
               </label>
              </div>
        </div>
    </>
    );
}

export default Menu