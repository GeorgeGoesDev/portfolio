import React from 'react'
import Carousel from '../Carousel/Carousel'
import './Skills.css'

const Skills = () => {

    const frontend = ['Javascript', 'Typescript', 'React', 'HTML', 'CSS',];
    const backend = ['Node', 'Express', 'MongoDB', 'PostgreSQL'];
    const other = ['Firebase', 'Mocha', 'Jest'];

    return (
        <div className='skills-container'>
            <h1 className='skills-title'>Frontend</h1>
            <div className='skill-list'>
                {frontend.map(item => <div className='item-list'>{item}</div>)}
            </div>
            <Carousel items={frontend} />
            <h1 className='skills-title'>Backend</h1>
            <div className='skill-list'>
                {backend.map(item => <div className='item-list'>{item}</div>)}
            </div>
            <Carousel items={backend} />
            <h1 className='skills-title'>Other</h1>
            <div className='skill-list'>
                {other.map(item => <div className='item-list'>{item}</div>)}
            </div>
            <Carousel items={other} />
        </div>
    )
}

export default Skills