import React from 'react'
import './Logement.scss'
import Slider from '../../components/Slider/Slider'
import ProfilLocate from '../../components/ProfilLocate/ProfilLocate'
import Accordion from '../../components/Accordion/Accordion'
import {useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


export default function Logement() {

  const location = useLocation()
  console.log(location.state.equipments);

  return (
    <>
        <header>
            <Slider/>
        </header>
        <main>
            <ProfilLocate/>
            <div className="logementAccordion">
              <Accordion
                choiceStyle={'locate'}
                title={'Description'}
              >
                <p>{location.state.description}</p>
              </Accordion>
              <Accordion
                choiceStyle={'locate'}
                title={'Équipements'}
              >
                <ul>
                  {location.state.equipments.map((item) => {
                      return (
                        <li
                        key={uuidv4()}
                        >{item}</li>
                      )
                  })}
                  </ul>
              </Accordion>
            </div>

        </main>
    </>
  )
}
