import Header from './Header';
import { BG_URL } from '../utils/constants';
import { useState, useRef } from 'react'; // ! useRef is used to populate variables with input data (or use useState() to change the value of variable directly)
import {checkDataValidity} from '../utils/validate';

const Login = () => {
    const [isSignInform, setisSignInform] = useState(true);
    const email = useRef();
    const password = useRef();

    const toggleSignIn = () => {
        setisSignInform(!isSignInform);
    }
    const handleButtonClick = () => {
        // validate the data
        checkDataValidity(email.current.value);
        checkDataValidity(password.current.value);
    }
    return <div >
        <Header />
        <div className="absolute">
            <img src={BG_URL} alt="background" className="overscroll-none"></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 rounded-md">
            <h1 className="text-white text-3xl px-2 font-semibold">
                {
                    isSignInform ? "Sign In" : "Sign Up"
                }
            </h1>
            {
                !isSignInform && <input
                    type="text"
                    placeholder="Name"
                    className="border-[1px] border-gray-100 bg-gray-800 bg-opacity-30 py-3 px-3 m-2 rounded-md w-full text-white"
                />
            }
            <input
                ref={email}
                type="text"
                placeholder="Email or Mobile no."
                className="border-[1px] border-gray-100 bg-gray-800 bg-opacity-30 py-3 px-3 m-2 rounded-md w-full text-white" 
                onClick={handleButtonClick}
            />
            <input
                ref={password}
                type="password"
                placeholder="Password"
                className="border-[1px] border-gray-100 bg-gray-800 bg-opacity-30 py-5 m-2 px-3 rounded-md w-full text-white" 
            />
            <button className="py-4 mb-10 m-2 bg-red-700 rounded-md w-full text-white">
                {
                    isSignInform ? "Sign In" : "Sign Up"
                }
            </button>
            <span className="text-gray-400 mx-2 pl-1">
                {
                    isSignInform ? "New to puffgrit?" : "Already a user?"
                }
            </span>
            <span className="text-white font-semibold cursor-pointer" onClick={toggleSignIn}>
                {
                    isSignInform ? "Sign up now" : "Sign in now"
                }
            </span>
        </form>
    </div>
}
export default Login