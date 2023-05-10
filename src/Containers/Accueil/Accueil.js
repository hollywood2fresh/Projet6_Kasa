import React from 'react'
import './Accueil.scss'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import data from '../../logements.json'
import bannerImg from '../../assets/banner.jpeg'

console.log(data);

export default function Accueil() {
  return (
    <>
        <header>
            <Banner
            picture={bannerImg}
            text={'Chez vous, partout et ailleurs'}
            />
        </header>
        <main>
            <section className='homeSectionCard'>
                {data.map((item) => {
                    return <Card
                            key={item.id}
                            picture={item.cover}
                            title={item.title}
                            />
                })}
                
            </section>
        </main>
    </>
  )
}
