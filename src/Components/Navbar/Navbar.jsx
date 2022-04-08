import React from 'react';
import './Style.css';
import '../../fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar(){
    return(
<nav className='navbar'>
<FontAwesomeIcon icon="fa-solid fa-earth-asia" style={{color: "white", paddingTop: "13px", fontSize: "26px"}} />
<span>MyTravelJournal</span>
</nav>


    );
}
export default Navbar;