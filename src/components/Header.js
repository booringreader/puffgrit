import React from 'react'
import { LOGO_URL, USER_ICON_URL } from '../utils/constants';
import {auth} from '../utils/firebase';
import {signOut} from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute pl-24 pt-7 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
       <img src={LOGO_URL} alt="logo" className="w-44"></img>
       
       { user && (
        <div className="flex px-2">
        <img src={user.photoURL} alt="user icon" className="w-12 h-12 p-2" />
        <button className="rounded-lg text-white py-0 font-bold" onClick={handleSignOut}>Sign Out</button>
       </div>)
       }
    </div>
  )
}

export default Header