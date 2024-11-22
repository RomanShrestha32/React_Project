import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}} />

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi quis, quos labore asperiores odio similique, architecto modi explicabo minus eligendi. Totam id incidunt porro inventore expedita. Dignissimos, minus aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi quis, quos labore asperiores odio similique, architecto modi explicabo minus eligendi. Totam id incidunt porro inventore expedita. Dignissimos, minus aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi quis, quos labore asperiores odio similique, architecto modi explicabo minus eligendi. Totam id incidunt porro inventore expedita. Dignissimos, minus aliquid.</p>
            
            
        </div>

    </div>
  )
}

export default About