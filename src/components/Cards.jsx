import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import SwipeButtons from './SwipeButtons'
import database from '../firebase'
import '../styles/cards.css' 

const Cards = () => {

    const [people, setPeople] = useState([])

    useEffect(()=>{
        database.collection('people').onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    },[])

    return (
        <div className='cards'>
            {
                people.map(({name, imageUrl}, index) => (
                    <TinderCard
                        className='swipe'
                        key={`${name}${index}`}
                        preventSwipe={['up','down']}
                    >
                        <div 
                            className="card"
                            style={{backgroundImage: `url(${imageUrl})`}}
                        >
                            <h3>{name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            <SwipeButtons />
        </div>
    )
}

export default Cards
