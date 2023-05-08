import React, { useState } from 'react'
import './Carousel.css'

const left_arrow = require('../../assets/left-arrow.png')
const right_arrow = require('../../assets/right-arrow.png')


interface CarouselProps {
    items: string[]
}

const Carousel = ({ items }: CarouselProps) => {



    const [currdeg, setCurrdeg] = useState(0);

    const rotate = (d: string) => {
        if (d === "n") {
            setCurrdeg(currdeg => currdeg - (360 / items.length));
        }
        if (d === "p") {
            setCurrdeg(currdeg => currdeg + (360 / items.length));
        }
    }



    return (
        <div className='whole-carousel'>
            <div className="container">
                <div
                    className="carousel"
                    style={{
                        WebkitTransform: `rotateY(${currdeg}deg)`,
                        OTransform: `rotateY(${currdeg}deg)`,
                        transform: `rotateY(${currdeg}deg)`
                    }}
                >
                    {items.map((element, index) => <div
                        className='item'
                        style={{
                            transform: `rotateY(${-0 + index * (360 / items.length)}deg) translateZ(250px)`,
                            OTransform: `rotateY(${-0 + (360 / items.length) * index}deg) translateZ(250px)`,
                            WebkitTransform: `rotateY(${-0 + (360 / items.length) * index}deg) translateZ(250px)`,
                        }}
                    >
                        {element}
                    </div>)}

                </div>
                <div className='buttons-container'>

                    <img className='prev' src={left_arrow} onClick={() => rotate("p")} alt='left arrow' />
                    <img className='next' src={right_arrow} onClick={() => rotate("n")} alt='right arrow' />
                </div>
            </div>
        </div>
    )
}

export default Carousel