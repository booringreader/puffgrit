import React from 'react'
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="absolute px-24 py-7 bg-gradient-to-b from-black z-20">
       <img src={LOGO_URL} alt="logo" className="w-48"></img>
    </div>
  )
}

export default Header