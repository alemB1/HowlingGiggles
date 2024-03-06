import React from 'react';
import './PostPage.css'
export default function PostPage(){
    return(
        <div className="postpage">
         <div className="logo">
                    <img src="src/assets/image.png" className="image" alt="error"></img>
                    <h1 className="logotext">Howling giggles</h1>
                </div>
                <div className="card">
                <p className="text"> Write your UserName here: </p>
              <input className='textbox1' type='text' />
              <p className="text"> Write your joke here: </p>
              <input className='textbox2' type='text' />
              <button className='button'>POST</button>
                </div>
        </div> 
    );
}
