import React from 'react'
import './ProfilLocate.scss'
import {useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


export default function ProfilLocate() {

    const location = useLocation()
    const tilte = location.state.title
    const locate = location.state.location
    const tag = location.state.tags
    const name = location.state.host.name
    const image = location.state.host.picture
    const rating = location.state.rating


    const starAdd = rating

    let star1 = false
    let star2 = false
    let star3 = false
    let star4 = false
    let star5 = false

    if(starAdd === '1') {
        star1 = true
    } else if(starAdd === '2') {
        star1 = true
        star2 = true
    } else if(starAdd === '3') {
        star1 = true
        star2 = true
        star3 = true
    } else if(starAdd === '4') {
        star1 = true
        star2 = true
        star3 = true
        star4 = true
    } else if(starAdd === '5') {
        star1 = true
        star2 = true
        star3 = true
        star4 = true
        star5 = true
    }

  return (
    <div className='profilLocate'>
        <div className="profilLocate--infoLogement">
            <h2 className='profilLocate--infoLogement--title'>{tilte}</h2>
            <p className='profilLocate--infoLogement--location'>{locate}</p>
            <div className="profilLocate--infoLogement--tag">
                {tag.map((item) => {
                    return (
                        <div 
                        key={uuidv4()}
                        className="profilLocate--infoLogement--tag--item"
                        >{item}</div>
                    ) 
                })}
                
            </div>
        </div>
        <div className="profilLocate--infoProfil">
            <div className="profilLocate--infoProfil--card">
                <p>{name}</p>
                <img src={image} alt="" />
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
