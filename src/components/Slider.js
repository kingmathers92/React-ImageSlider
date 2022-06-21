import React, {useState} from 'react';
import BtnSlider from './BtnSlider';
import data from '../data';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    function nextSlide() {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
    }

    function prevSlide() {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const dataSlide = data.map((obj, index) => {
        return (
            <div
            className={slideIndex === index + 1 ? "frame active-anim" : "frame"}
            key={obj.id}>
                <img
                src={process.env.PUBLIC_URL +
                `/images/img${index + 1}.jpg`}
                alt="img"
                />
            </div>
        )
    })
  return (
    <div className='container'>
        {dataSlide}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className='container-dots'>
            {Array.from({length: 5}).map((item, index) => (
                <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}>

                </div>
            ))}
        </div>
    </div>
  )
}
