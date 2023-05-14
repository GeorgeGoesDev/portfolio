import React from 'react'
import './Menu.css'
import StripeButton from '../StripeButton/StripeButton'

const Menu = () => {
    return (
        <div className='top-menu'>
            <StripeButton text="Home" />
            <StripeButton text="Projects" />
            <StripeButton text="Skills" />
            <StripeButton text="About" />
            <StripeButton text="Contact" />

        </div>
    )
}

export default Menu