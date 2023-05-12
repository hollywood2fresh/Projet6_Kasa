import {useState} from 'react'
import './TestElement.scss'


const textEx = 'Je suis le contJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuJe suis le contenuenu'


export default function TestElement() {

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

    <div className={`test-accordion test-accordion${fontStyle} test-accordion__background`}>
      
        <div 
        onClick={toggleState}
        className="test-accordion--visible">
            <h2>je suis un titre</h2>
            <i className={ toggle ? 'fa-solid fa-chevron-down arrow--off' : 'fa-solid fa-chevron-down arrow--on'}></i>
            <i className={ toggle ? 'fa-solid fa-chevron-up arrow--on' : 'fa-solid fa-chevron-down arrow--off'}></i>
        </div>

        <div className={toggle ? `test-accordion--toggle ${heightStyle}` : `test-accordion--toggle`}>
            <p className={ toggle ? 'animation--on' : 'animation--off'}>{textEx}</p>
        </div>

    </div>
  )
}
