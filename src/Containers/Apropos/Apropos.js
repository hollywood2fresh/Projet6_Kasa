import React from 'react'
import './Apropos.scss'
import Banner from '../../components/Banner/Banner'
import bannerImg from '../../assets/bannerApropos.jpg'
import Accordion from '../../components/Accordion/Accordion'
import data from '../../logements.json'

export default function Apropos() {
  return (
    <>
        <header>
            <Banner
            picture={bannerImg}
            />
        </header>
        <main>
            <section  className='AproposSection'>
                <Accordion
                choiceStyle={'propos'}
                title={'Fiabilité'}
                >
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Accordion>
                <Accordion
                choiceStyle={'propos'}
                title={'Respect'}
                >
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Accordion>
                <Accordion
                choiceStyle={'propos'}
                title={'Service'}
                >
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Accordion>
                <Accordion
                choiceStyle={'propos'}
                title={'Sécurité'}
                >
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Accordion>
            </section>
        </main>
    </>
  )
}
