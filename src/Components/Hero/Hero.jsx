import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1> We ensure better education for a better world</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, fuga libero hic omnis, earum velit facere tempore itaque, quisquam ipsa optio commodi nisi doloribus. Sunt eligendi provident hic necessitatibus natus.</p>
      <button className='btn'>Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero