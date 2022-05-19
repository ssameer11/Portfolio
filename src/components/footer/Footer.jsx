import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiLeetcode} from 'react-icons/si'

import {INSTAGRAM_PROFILE,FACEBOOK_PROFILE,TWITTER_PROFILE} from '../../confidential'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAMEER SHAIKH</a>
      <div className="footer__socials">
      <a href='https://leetcode.com/Sameer177' target='_blank'><SiLeetcode/></a>
      <a href={FACEBOOK_PROFILE} target='_blank'><FaFacebookF/></a>
      <a href={INSTAGRAM_PROFILE} target='_blank'><FiInstagram/></a>
      <a href={TWITTER_PROFILE} target='_blank'><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer