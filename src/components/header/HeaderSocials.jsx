import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="http://linkedin.com/sameersshaikh" target="_blank"><BsLinkedin/></a>
          <a href="http://github.com/ssameer11" target="_blank"><FaGithub/></a>
          <a href="http://leetcode.com/sameer177" target="_blank"><SiLeetcode/></a>
      </div>
  )
}

export default HeaderSocials