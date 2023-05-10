import {useState} from 'react'
import './Slider.scss'

export default function Slider() {

    const picture = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

    const initialState = (0)

    const [slide, setSlide] = useState(initialState)

    const showNextSlide = () => {
        if(slide < picture.length -1) {
            setSlide(slide + 1) 
        } else {
            setSlide(initialState)
        }
        
    }

    const showPreviousSlide = () => {
        if(slide > 0) {
			setSlide(slide - 1) 
		} else {
			setSlide(picture.length - 1)
		}
    }

    // Pagination

    const paginationTotalSlide = picture.length
    const paginationCurrentSlide = slide + 1

    let paginationShow = false
    if(picture.length > 1 ) {
        paginationShow = true
    }

  return (
    <div className='slider'>
        <img src={picture[slide]} alt="" className="slider--picture" />
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
