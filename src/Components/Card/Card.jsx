import React from 'react';
import "./Style.css";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Card(props){
    return(

        <div className='card'>
            <img src={ props.item.img }></img>
            <div className='content'>
                <div className='location'>
                    <div>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot"  style={{ color: "red"}}/>
                    <span>{ props.item.location }</span>
                    </div>
                
                    {/* <NavLink to={ props.item.link }>View on google maps</NavLink> */}
                    <Link to={props.item.link}>View on Google maps</Link>
                   
                </div>
                <h2>{ props.item.name }</h2>
                <div className='date'>
                <span>{ props.item.start }</span>
                <span>-</span>
                <span>{ props.item.end }</span>
                </div>
                <div>
                <p>{ props.item.description }</p>
                </div>
                
           
                </div>
        </div>
    );
}
export default Card;