import React, { useEffect, useState } from 'react'
import './SideBar.css'
import StripeButton from '../StripeButton/StripeButton'

const SideBar = () => {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(false)
    }, [])
    // onClick={() => setIsChecked(false)}

    return (
        <div className='side-menu'>
            <label className="hamburger-menu">
                <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
            </label>
            <aside className="sidebar">
                <nav className='side-nav' onClick={() => setIsChecked(false)}>
                    <StripeButton text="Home" />
                    <StripeButton text="Projects" />
                    <StripeButton text="Skills" />
                    <StripeButton text="About" />
                </nav>
            </aside>
        </div>
    )
}

export default SideBar