import React from 'react'
import './Social.css'


const linkedinIcon = require('../../assets/LI-In-Bug.png')
const githubIcon = require('../../assets/github-mark-white.png')
const cvIcon = require('../../assets/cv-icon.png')
const Social = () => {

    const pdfFile = require('../../assets/George_Koutanis_resume.pdf')

    return (

        <div>



            <ul className='social-nav'>
                <li>
                    <a href="https://www.linkedin.com/in/george-koutanis-108541164/" target='_blank' rel="noreferrer">
                        <img className='social-img' src={linkedinIcon} alt='linkedin icon' />
                    </a>
                </li>
                <li className="">
                    <a href="https://www.github.com/GeorgeGoesDev/" target='_blank' rel="noreferrer">
                        <img className='social-img' src={githubIcon} alt='github Icon' />
                    </a>
                </li>
                <li className="">
                    <a href={pdfFile} download="George_Koutanis_resume.pdf">
                        <img className='social-img invert' src={cvIcon} alt='CV Icon' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social