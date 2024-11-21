import Header from './Header';
import { BG_URL } from '../utils/constants';
import { useState, useRef } from 'react'; // ! useRef is used to populate variables with input data (or use useState() to change the value of variable directly)
import { checkDataValidity } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInform, setisSignInform] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const email = useRef();
    const password = useRef();
    const name = useRef(null);
    const dispatch = useDispatch();

    const toggleSignIn = () => {
        setisSignInform(!isSignInform);
    }
    const handleButtonClick = () => {
        // validate the data
        const message = checkDataValidity(email.current.value, password.current.value);
        setErrorMessage(message)
        if (message) return;

        if (!isSignInform) { // ? signUP form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://avatars.githubusercontent.com/u/157519312?v=4"
                    })
                    .then(() => {
                        // update the store once again (since photo and name do not appear in the store in the first try)
                        const { uid, email, displayName, photoURL} = auth.currentUser; // ! data shouldn't be fetched from the 'user' since it isn't updated yet
                        dispatch(
                            addUser({
                                uid: uid, 
                                email: email, 
                                displayName: displayName, 
                                photoURL: photoURL
                            })
                        );
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorcode = error.code;
                    const errormessage = error.message;
                    setErrorMessage(errorcode + "-" + errormessage);
                });
        } else if (isSignInform) { // ? signIN form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
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
            />
            <input
                ref={password}
                type="password"
                placeholder="Password"
                className="border-[1px] border-gray-100 bg-gray-800 bg-opacity-30 py-5 m-2 px-3 rounded-md w-full text-white"
            />
            <p className="text-red-600 mx-2 text-lg">{errorMessage}</p>
            <button className="py-4 mb-10 m-2 bg-red-700 rounded-md w-full text-white" onClick={handleButtonClick}>
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