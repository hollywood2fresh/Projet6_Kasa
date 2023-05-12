import {useState} from 'react'
import './Accordion.scss'

export default function TestElement(props) {

  const [toggle, setToggle] = useState(false)


  const toggleState = () => {
    setToggle(!toggle) 
  }

  // provide to change style according to desired style
  // 'locate' for page locate 
  // 'propos' for page A propos

  const recup = props.choiceStyle
  let fontStyle = ''
  let heightStyle = ''

  switch (recup) {
    case 'locate':
      fontStyle = '__fontLocation';
      heightStyle = 'heightLocation';
      break;
    
    case 'propos':
      fontStyle = '__fontPropos';
      heightStyle = 'heightPropos';
      break;
  
    default:
      fontStyle = '__fontLocation';
      heightStyle = 'heightLocation';
      break;
  }

  return (

    <div className={`accordion accordion${fontStyle}`}>
      
      <div className={toggle ? "color" : undefined}>
          <div 
          onClick={toggleState}
          className="accordion--visible">
              <h2>{props.title}</h2>
              <i className={ toggle ? 'fa-solid fa-chevron-down arrow--off' : 'fa-solid fa-chevron-down arrow--on'}></i>
              <i className={ toggle ? 'fa-solid fa-chevron-up arrow--on' : 'fa-solid fa-chevron-down arrow--off'}></i>
          </div>
      </div>


        <div className={toggle ? `accordion--toggle ${heightStyle}` : `accordion--toggle`}>
            <div className={ toggle ? 'animation--on' : 'animation--off'}>{props.children}</div>
        </div>

    </div>
  )
}
