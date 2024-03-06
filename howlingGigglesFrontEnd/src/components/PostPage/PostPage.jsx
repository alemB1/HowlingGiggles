import React from 'react';
import { useRef } from 'react';
import './PostPage.css'


export default function PostPage(){
    const inputUsername = useRef(null)
    const inputContent = useRef(null)
    const fetchUrl = 'https://howling-giggles-api-91bd64df8074.herokuapp.com/Post/add'
    function postContent(){
        if(inputUsername.current.value === "" || inputContent.current.value === ""){
            alert("Empty input, please enter something.")
        }
        else{
            fetch(fetchUrl, {
                method:'POST',
                mode:'cors',
                body:JSON.stringify({
                    "username":inputUsername.current.value,
                    "postContent":inputContent.current.value,
                    "likeCount":0
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response) => response.json().then(()=>{
                alert("Successfully added a new joke :D")
                // add clear input later on
            })
            .catch((err)=>{
                console.log(err.message)
            }))
        }
    }
    return(
        <div className="postpage">
         <div className="logo">
                    <img src="src/assets/image.png" className="image" alt="error"></img>
                    <h1 className="logotext">Howling giggles</h1>
                </div>
                <div className="card">
                <p className="text"> Write your UserName here: </p>
              <input className='textboxUsername' ref={inputUsername} type='text' />
              <p className="text"> Write your joke here: </p>
              <input className='textboxInput' ref={inputContent} type='text' />
              <button className='button' onClick={postContent}>POST</button>
                </div>
        </div> 
    );
}
