import React, { useEffect, useState } from "react";
import "./CardsHolder.css";
import Card from '../Card/Card.jsx'

export default function CardsHolder() {
    const url = 'https://howling-giggles-api-91bd64df8074.herokuapp.com/Post/getall'
    const [data,setData] = useState([])

    const fetchJokes = () =>{
        return fetch(url).then((res)=>res.json()).then((d) =>setData(d))
    }

    useEffect(() => {
        fetchJokes()
        console.log(data)
    }, []);

    const jokesMap = data.map(item => {
        return(
            <Card 
                key={item.id}
                item = {item}
            />
        )
    })

    return(
        <div className="containter">
            <div className="cardsHolder">
               {jokesMap}
            </div>
        </div>
    );
}