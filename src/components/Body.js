import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    }
  ]);

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

  return <div>
    <RouterProvider router={appRouter} />
  </div>
}
export default Body



// ! useNavigate is used inside <RouterProvider>, since the paths will be formed after router code block is executed
// 1. use normal redirection
// 2. move the routing logic to App.js instead of Body.js
// 3. use navigate inside the router (after the user has signed in)