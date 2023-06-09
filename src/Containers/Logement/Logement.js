import React from 'react'
import './Logement.scss'
import Slider from '../../components/Slider/Slider'
import ProfilLocate from '../../components/ProfilLocate/ProfilLocate'
import Accordion from '../../components/Accordion/Accordion'
import {useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Error from '../Error/Error'


export default function Logement() {

  let location = useLocation()

  if(location.state === null) {
    return <Error/>
  } else
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
