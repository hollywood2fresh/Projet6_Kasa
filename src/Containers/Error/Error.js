import React from 'react'
import './Error.scss'
import {useNavigate} from 'react-router-dom'

export default function Error() {

  const navigate = useNavigate()

  return (
    <section className='errorSection'>
      <div className='errorSection--404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <p
      onClick={() => navigate('/')}
      className='errorSection--return'
      >Retourner sur la page d’accueil</p>
    </section>
  )
}
