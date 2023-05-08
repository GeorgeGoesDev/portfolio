import React from 'react'
import './StripeButton.css'
import { useNavigate } from 'react-router-dom';

interface StripeButtonProps {
    text: string;
}

const StripeButton = (props: StripeButtonProps) => {
    const navigate = useNavigate()
    const { text } = props;
    return (
        <div className="stripe-btn" onClick={() => { navigate(`/${text}`) }}>
            <span className='stripe-text'>{text}</span>
            <div className="corners">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="stripes">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i><i></i>

            </div>
        </div>
    )
}

export default StripeButton