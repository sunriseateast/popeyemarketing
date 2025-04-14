import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useFetcher } from 'react-router-dom'
import Softwaresfilter from './Softwares/Softwaresfilter.jsx'
import Home from './Home.jsx'
import Resellerfilter from './Reseller/Resellerfilter.jsx'
import Supportfilter from './Support/Supportfilter.jsx'
import Demofilter from './Demo/Demofilter.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"softwares",
        element:<Softwaresfilter/>
      },
      {
        path:"reseller",
        element:<Resellerfilter/>
      },
      {
        path:"support",
        element:<Supportfilter/>
      },
      {
        path:"book_a_demo",
        element:<Demofilter/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
