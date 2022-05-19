import React from 'react'
import './about.css'
import ME from '../../assets/me.jfif'
import {FaAward} from 'react-icons/fa'
import {BsTrophy} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years of Web development experience</small>
            </article>
            <article className="about__card">
              <BsTrophy className='about__icon'/>
              <h5>Leetcode</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>I'm a CS engineering final year student and Full stack
developer with experience in front end and back
end web development.Efficient Problem Solver with comprehensive understanding of numerous data structures and algorithms. I have solved over 330+ questions on leetcode.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About