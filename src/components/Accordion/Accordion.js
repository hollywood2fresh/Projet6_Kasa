import {useState} from 'react'
import './Accordion.scss'


//      • props •
// choice style : 'locate' / OR / 'propos'
// title : 'your title'
// props.children

export default function Accordion(props) {



  const [toggle, setToggle] = useState(false)


  const toggleState = () => {
    setToggle(!toggle) 
  }

  // provide to change style according to desired style
  // 'locate' for page locate 
  // 'propos' for page A propos

  let recup = props.choiceStyle
  let changeStyleAccord = recup
  let changeStyleToggle = recup

  switch (changeStyleAccord) {
    case 'locate':
        changeStyleAccord = 'locale';
        changeStyleToggle = 'locateToggle locale';
      break;

      case 'propos':
        changeStyleAccord = 'propos';
        changeStyleToggle = 'proposToggle propos';
      break;

    default:
        changeStyleAccord = 'locale';
        changeStyleToggle = 'locateToggle locale';
      break;
  }

  return (
    <div className={`accordion ${changeStyleAccord}`}>
        <div
        onClick={toggleState}
        className='accordion--visible'>
          <h2>{props.title}</h2>
          <i className={toggle ? 'chevronNone' : 'fa-solid fa-chevron-down'}></i>
          <i className={toggle ? 'fa-solid fa-chevron-up' : 'chevronNone'}></i>
        </div>

        <div className={toggle ? `accordion--toggle ${changeStyleToggle}` : `accordion--toggle toggleNone ${changeStyleToggle}`}>
          {props.children}
        </div>
    </div>
  )
}
