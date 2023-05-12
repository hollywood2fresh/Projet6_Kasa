import React from 'react'
import './Banner.scss'

export default function Banner(props) {

  let recup = props.choiceStyle
  let changeStyleBanner = recup

  switch (changeStyleBanner) {
    case 'accueil':
      changeStyleBanner = '__heightAccueil';
    break;

    case 'propos':
      changeStyleBanner = '__heightprops';
    break;
  
    default:
      changeStyleBanner = '__heightAccueil';
    break;
  }

  return (
    <div className={`banner banner${changeStyleBanner}`}>
        <img
        src={props.picture}
        className='banner--image'
        alt='paysage montagneux'
        />
        <h1>{props.text}</h1>
    </div>
  )
}
