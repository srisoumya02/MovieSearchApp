import { faCog,faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header=()=>{
    return(<>
   <div className="HeaderContent"> <FontAwesomeIcon icon={faCog} className="settings-icon" />
        <div class="search-container">
    <input type="text" name="search" id="search" placeholder="Search..." />
    <button type="submit" class="search-button">
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </button>
</div>
<button type="submit" class="login-button">
    <FontAwesomeIcon icon={faUserCircle} className="search-icon" />
    </button>
   </div>
       
  
    </>)
}

export default Header;