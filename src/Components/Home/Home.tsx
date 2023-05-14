import React from 'react'
import Globe from '../Globe/Globe'
import './Home.css'
import Social from '../Social/Social'

const Home = () => {
    return (

        <div>
            <div className="wrapper">
                <div className="typing">
                    Welcome to my world...
                </div>
            </div>
            <Social />
            <Globe />
            <div className='name'>George Koutanis</div>
        </div>

    )
}

export default Home