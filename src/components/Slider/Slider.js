import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import './Slider.scss'

export default function Slider() {

    const location = useLocation()
    const pictures = location.state.pictures

    const initialState = (0)

    const [slide, setSlide] = useState(initialState)

    const showNextSlide = () => {
        if(slide < pictures.length -1) {
            setSlide(slide + 1) 
        } else {
            setSlide(initialState)
        }
        
    }

    const showPreviousSlide = () => {
        if(slide > 0) {
			setSlide(slide - 1) 
		} else {
			setSlide(pictures.length - 1)
		}
    }

    // Pagination

    const paginationTotalSlide = pictures.length
    const paginationCurrentSlide = slide + 1

    let paginationShow = false
    if(pictures.length > 1 ) {
        paginationShow = true
    }

  return (
    <div className='slider'>
        <img src={pictures[slide]} alt="" className="slider--picture" />
        <i 
        onClick={showPreviousSlide}
        className="fa-sharp fa-solid fa-chevron-left"></i>
        <i 
        onClick={showNextSlide}
        className="fa-sharp fa-solid fa-chevron-right"></i>
        <span className={paginationShow ? "slider--pagination" : "paginationNone"}>{paginationCurrentSlide}/{paginationTotalSlide}</span>
    </div>
  )
}
