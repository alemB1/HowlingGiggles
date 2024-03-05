import React from 'react'
import './MainContent.css'
export default function MainContent(){
    return(
        <div className='mainContent'>
            <div className='mainContent--heading'>
                <h1>
                    Welcome to howling giggles, relax and have a <span className='orange-heading'>blast!</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur. Malesuada gravida imperdiet mi luctus malesuada<br/> 
                a malesuada. Vel ridiculus ultricies sit ullamcorper arcu<br/>
                 amet a sit senectus.
                </p>
            </div>
            <div className='mainContent--image'>
                <img src="src/assets/ljudi.png"></img>
            </div>
        </div>
    );
}