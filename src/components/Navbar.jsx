import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBurst, faCompass, faFilm, faGun, faHandFist, faMagicWandSparkles, faStar, faTheaterMasks, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

const Navbar=()=>{
    return(
        <>
       
            <div style={{margin:"10px"}}>
              <span className="nav-logo">Cl</span>
            </div>
            <hr />
            <div className="cat-class">
                <h3>Categories</h3>
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faFilm} className="film-icon" />
                     
                        Popular
                        </li>
                    <li>
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                        Top Rated</li>
                    <li>
                    <FontAwesomeIcon icon={faUsersRectangle} className="star-icon" />
                        Upcoming</li>
                </ul>
            </div>
            <hr />
            <div className="gen-class">
                <h3>Genres</h3>
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faHandFist} className="star-icon" />
                    <FontAwesomeIcon icon={faBurst} className="star-icon" />  
                        Action</li>
                    <li>
                    <FontAwesomeIcon icon={faCompass} className="star-icon" /> 
                        Adventure</li>
                    <li>
                    <FontAwesomeIcon icon={faMagicWandSparkles} className="star-icon" /> 
                        Animation</li>
                    <li>
                    <FontAwesomeIcon icon={faTheaterMasks} className="star-icon" /> 
                        Comedy</li>
                    <li>
                    <FontAwesomeIcon icon={faGun} className="star-icon" /> 
                        Crime</li>
                </ul>
            </div>
      
        </>
    )
}

export default Navbar;