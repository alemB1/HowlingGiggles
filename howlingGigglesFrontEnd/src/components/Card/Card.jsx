import React, { useState } from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    const [likeCount, setLikeCount] = useState(props.item.likeCount)

    const url = "https://howling-giggles-api-91bd64df8074.herokuapp.com/Post/update/";

    const handleClick = () => {
        let hasBeenLiked = localStorage.getItem(`isLiked_${props.item.id}`); 
        
        if(hasBeenLiked === null){
            localStorage.setItem(`isLiked_${props.item.id}`, 'true');
        } else {
            let updateValue = hasBeenLiked === 'true' ? 'false' : 'true';
            localStorage.setItem(`isLiked_${props.item.id}`, updateValue);
        }

        let isLiked = localStorage.getItem(`isLiked_${props.item.id}`); 

        let updatedLike;
        if (isLiked === 'true') {
            setLikeCount(prevLikeCount => prevLikeCount + 1 );
            updatedLike = likeCount + 1;
        } else {
            setLikeCount(prevLikeCount => prevLikeCount - 1 );
            updatedLike = likeCount - 1;
        }

        fetch(url + props.item.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: props.item.username,
                postContent: props.item.postContent,
                likeCount: updatedLike,
                key: 'updatedValue'
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('ERROR: Unable to update the data...');
            }
        })
        .catch(error => console.error(error));

    };

    return (
        <div className="card--main">
            <h3>#{props.item.id}</h3>
            <h1>By: {props.item.username}</h1>
            <p>
                {props.item.postContent}
            </p>
            <div className="card--likeCount">
                <h3 onClick={handleClick}><FontAwesomeIcon className="laughIcon" icon={faFaceLaughSquint} />{likeCount}</h3>
            </div>
        </div>
    )
}