import { createBrowserRouter} from "react-router-dom"
import  Home  from "./view"
import Layout  from "./components/Layout/";



const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }      
    ]
  }
])

export {router};