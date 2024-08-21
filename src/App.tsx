import './App.css'

import { useState } from 'react';
import Login from '../components/Login/Login.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import Feed from '../components/Feed/Feed.tsx';
import Header from '../components/Header/Header.tsx';
import HeroSection from '../components/HeroSection/HeroSection.tsx';
import LFG from '../components/LFG/LFG.tsx';
import FeedPage from '../components/Feed/FeedPage.tsx';
import Post from '../components/Post/Post.tsx';
import User from '../components/Profile/User.tsx';


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                index:true,
                element:<HeroSection/>
            },
            {
                path:"/feed",
                element:<Feed/>
            },
            {
                path:"/feed/:Feed_Id",
                element:<FeedPage/>
            },
            {
                path:"/LFG",
                element:<LFG/>
            },

            {
                path:"/Post",
                element:<Post/>
            },
            {
                path: "/user/:user_id",
                element: <User/>
            }
        ]
    }
])

function App() {
          
        
 const [login, setLogin] = useState(false)

    if (login ===false) {
      return (<Login login={login} setLogin={setLogin}/>)
    }
    else
return (
    <>
   <RouterProvider router={router}/>
   
   </>
  )

}
export default App
