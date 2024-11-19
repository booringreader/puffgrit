import { LOGO_URL, USER_ICON_URL } from '../utils/constants';
import {auth} from '../utils/firebase';
import {signOut} from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useDispatch, React } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { // signIn
        const { uid, email, displayName, photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      } else { // signout 
        dispatch(removeUser()); // no arguments, since removerUser doesn't handle parameters inside
      }
    });
  }, [])

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