import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Login } from "./components/Login"
import { useParams } from "react-router-dom"
import { User } from "./components/User"
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'

function App() {

  let params = useParams()
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
