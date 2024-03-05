import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";

export default function Card(props){
    return(
        <div className="card--main">
            <h3>#{props.item.id}</h3>
            <h1>By:{props.item.username}</h1>
            <p>
            {props.item.postContent}
            </p>
            <div className="card--likeCount">
                <h3><FontAwesomeIcon className="laughIcon" icon={faFaceLaughSquint} />{props.item.likeCount}</h3>            
            </div>
        </div>)
}