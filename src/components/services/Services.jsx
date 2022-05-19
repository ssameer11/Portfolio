import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>CS Fundamentals</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comprehensive understanding of Database Management System.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comprehensive understanding of Operating System.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comprehensive understanding of Computer Networks.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intermediate understanding of Computer Organization and Architecture.</p>
            </li>
          </ul>
        </article>        
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comprehensive understanding of various Data Structures and Algorithms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comprehensive understanding of Dynamic programming, Greedy algorithm etc.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>In-depth understanding of space and time complexity.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved 330+ problems on Leetcode.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>10k+ views on solutions posted on Leetcode.</p>
            </li>
          </ul>
        </article>
        {/* END OF PROBLEM SOLVING */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent understanding of Frontend frameworks such as Angular.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in HTML5.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intermediate understanding of CSS and Sass.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in ExpressJS.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have Intermediate understanding of MongoDB.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have Intermediate understanding of SQL.</p>
            </li>
          </ul>
        </article>        
      </div>
    </section>
  )
}

export default Services