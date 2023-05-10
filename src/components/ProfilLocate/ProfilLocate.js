import React from 'react'
import './ProfilLocate.scss'

export default function ProfilLocate(props) {

    const starAdd = 0

    let star1 = false
    let star2 = false
    let star3 = false
    let star4 = false
    let star5 = false

    if(starAdd === 1) {
        star1 = true
    } else if(starAdd === 2) {
        star1 = true
        star2 = true
    } else if(starAdd === 3) {
        star1 = true
        star2 = true
        star3 = true
    } else if(starAdd === 4) {
        star1 = true
        star2 = true
        star3 = true
        star4 = true
    } else if(starAdd === 5) {
        star1 = true
        star2 = true
        star3 = true
        star4 = true
        star5 = true
    }

  return (
    <div className='profilLocate'>
        <div className="profilLocate--infoLogement">
            <h2 className='profilLocate--infoLogement--title'>{props.tilte}</h2>
            <p className='profilLocate--infoLogement--location'>{props.locate}</p>
            <div className="profilLocate--infoLogement--tag">
                <div className="profilLocate--infoLogement--tag--item">{props.tag}</div>
            </div>
        </div>
        <div className="profilLocate--infoProfil">
            <div className="profilLocate--infoProfil--card">
                <p>{props.name}</p>
                <img src={props.image} alt="" />
            </div>
            <span className='profilLocate--infoProfil--star'>
                <i className={!star1 ? `fa-solid fa-star` : `fa-solid fa-star starAdd`}></i>
                <i className={!star2 ? `fa-solid fa-star` : `fa-solid fa-star starAdd`}></i>
                <i className={!star3 ? `fa-solid fa-star` : `fa-solid fa-star starAdd`}></i>
                <i className={!star4 ? `fa-solid fa-star` : `fa-solid fa-star starAdd`}></i>
                <i className={!star5 ? `fa-solid fa-star` : `fa-solid fa-star starAdd`}></i>
            </span>
        </div>
    </div>
  )
}
