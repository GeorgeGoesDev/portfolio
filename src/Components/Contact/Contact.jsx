import React, { useRef, useState } from 'react';
import './Contact.css';
import './GlowingButton.css';
import emailjs from 'emailjs-com';
import { Alert } from '@mui/material';
import Loading from '../Loading/Loading';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();
    if (!name || !email || !message) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 4000);
      return;
    }
    setIsLoading(true);

    emailjs
      .sendForm(
        'React_contact',
        'template_mjyzs0g',
        form.current,
        '2xuXCG-S33wUcGQp9'
      )
      .then(
        (result) => {
          form.current?.reset();
          setIsSubmitted(true);
          setIsLoading(false);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 4000);
          setIsError(false);
          console.log(result.text);
        },
        (error) => {
          setIsError(true);
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-form-container'>
      {isSubmitted && (
        <div className='success-message'>
          <Alert severity='success'>Message sent successfully!</Alert>
        </div>
      )}
      {isLoading && !isSubmitted && <Loading />}
      {!isLoading && !isSubmitted && (
        <>
          <h1 className='skills-title'>Contact Form</h1>
          <div className='contact-form'>
            <form className='cf' ref={form} onSubmit={sendEmail}>
              {isError && (
                <div className='error-message'>Please fill in all fields.</div>
              )}
              <div className='half left cf'>
                <input type='text' placeholder='Name' name='from_name' />
                <input
                  type='email'
                  placeholder='Email address'
                  name='from_email'
                />
              </div>
              <div className='half right cf'>
                <textarea name='message' placeholder='Message'></textarea>
              </div>
              <input type='submit' className='glowing-btn' />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
