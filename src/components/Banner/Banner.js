import React from 'react'
import './Banner.scss'

export default function Banner(props) {
  return (
    <div className='banner'>
        <img
        src={props.picture}
        className='banner--image'
        alt='paysage montagneux'
        />
        <h1>{props.text}</h1>
    </div>
  )
}
