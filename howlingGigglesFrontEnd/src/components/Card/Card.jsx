import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Card(){
    return(
        <div className="card--main">
            <h3>#2422552</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Malesuada gravida imperdiet mi luctus malesuada 
            a malesuada. Vel ridiculus ultricies sit ullamcorper arcu 
            amet a sit senectus.
            </p>
            <div className="card--likeCount">
                <h3>242</h3>            
            </div>
        </div>)
}