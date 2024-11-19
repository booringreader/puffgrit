import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const Body = () => {
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

  return <div>
    <RouterProvider router={appRouter} />
  </div>
}
export default Body



// ! useNavigate is used inside <RouterProvider>, since the paths will be formed after router code block is executed
// 1. use normal redirection
// 2. move the routing logic to App.js instead of Body.js
// 3. use navigate inside the router (after the user has signed in)