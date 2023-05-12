import React from 'react'
import './Accueil.scss'
import {Link} from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import data from '../../logements.json'
import bannerImg from '../../assets/banner.jpeg'

export default function Accueil() {

  return (
    <>
        <header>
            <Banner
            choiceStyle={'accueil'}
            picture={bannerImg}
            text={'Chez vous, partout et ailleurs'}
            />
        </header>
        <main>
            <section className='homeSectionCard'>
                {data.map((item) => {
                    return (
                        <Link
                        to={{pathname : `logement/${item.id}`}} state={item}
                        >
                            <Card
                            key={item.id}
                            picture={item.cover}
                            title={item.title}
                            />
                        </Link>
                    )
                })}
            </section>
        </main>
    </>
  )
}
