import React from 'react'
import Globe from '../Globe/Globe'
import './Home.css'

const Home = () => {
    return (

        <div>
            <div className="wrapper">
                <div className="typing">
                    Welcome to my world...
                </div>
            </div>
            <Globe />
            <div className='name'>George Koutanis</div>
        </div>

    )
}

export default Home