import React from 'react'
import './Card.scss'

export default function Card(props) {
  return (
    <figure className='card'>
        <img
        className='card--picture' 
        src={props.picture}
        alt="paysage"
        />
        <figcaption className='card--title'>
            {props.title}
        </figcaption>
    </figure>
  )
}
