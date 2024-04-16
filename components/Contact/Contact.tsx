'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, type FormEvent } from 'react'
import github from '../../images/icons/github.png'
import gmail from '../../images/icons/gmail.ico'
import linkedin from '../../images/icons/linkedin.png'
import twitter from '../../images/icons/twitter.png'
import RubberBand from '../RubberBand/RubberBand'
import styles from './Contact.module.css'

const Contact = () => {
  const nameInput = useRef<HTMLInputElement | null>(null)
  const emailInput = useRef<HTMLInputElement | null>(null)
  const messageInput = useRef<HTMLTextAreaElement | null>(null)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = nameInput.current?.value
    const email = emailInput.current?.value
    const message = messageInput.current?.value
    if (!name || !email || !message) {
      return
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
      if (!response.ok) {
        throw new Error('Failed to submit message')
      }
      if (response.ok) {
        setMessage('Message submitted successfully!')
        nameInput.current!.value = ''
        emailInput.current!.value = ''
        messageInput.current!.value = ''
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section id='contact'>
      <div className={styles.contact_box}>
        <div className={styles.contact_links}>
          <RubberBand text='CONTACT' type='subheading' />
          <div className={styles.links}>
            <div className={styles.link}>
              <Link href='https://in.linkedin.com/in/bishtshivanshu'>
                <Image src={linkedin} alt='linkedin' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='https://github.com/shivanshubisht'>
                <Image src={github} alt='github' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='https://twitter.com/bishtshivanshu'>
                <Image src={twitter} alt='twitter' />
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='mailto:%68%65%79%73%68%69%76%61%6E%73%68%75%40%67%6D%61%69%6C%2E%63%6F%6D'>
                <Image src={gmail} alt='gmail' />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contact_form_wrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_item}>
              <input type='text' name='sender' ref={nameInput} required />
              <label>Name:</label>
            </div>
            <div className={styles.form_item}>
              <input type='email' name='email' ref={emailInput} required />
              <label>Email:</label>
            </div>
            <div className={styles.form_item}>
              <textarea
                className={styles.form_item}
                name='message'
                ref={messageInput}
                required
              ></textarea>
              <label>Message:</label>
            </div>
            <div style={{ color: '#1de4e7' }}>{message}</div>
            <button className={styles.contact_button}>
              <div>
                <span className={styles.bg}></span>
                <span className={styles.base}></span>
                <span className={styles.text}> Send Message!</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
