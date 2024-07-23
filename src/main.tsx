import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout.tsx'
import { createHashRouter, RouterProvider} from "react-router-dom"
import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'



const router=createHashRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
