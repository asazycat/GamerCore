
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from '../components/Header'
import Feed from '../components/Feed'
import LFG from '../components/LFG'
import User from '../components/User'
import { useState } from 'react';
import Inbox from '../components/Inbox.tsx'
import Login from '../components/Login.tsx'
import Post from '../components/Post.tsx'
import Followers from '../components/Followers.tsx'
import FeedPage from '../components/FeedPage.tsx'

// import Stream from '../components/Stream.tsx'
function App() {
 
 const [login, setLogin] = useState(false)

    if (login ===false) {
      return (<Login login={login} setLogin={setLogin}/>)
    }
    else
return (
   <div>
   <Header/> 
   
  <Routes>
    <Route path="Feed/:Feed_Id" element={<FeedPage/>}/>
    <Route path="/Followers" element = {<Followers/>}/> 
    <Route path="/Inbox" element={<Inbox/>}/>
  <Route path="/feed" element={<Feed />} />
  <Route path="/LFG" element={<LFG />} />
  <Route path=":user_id" element={<User/>} />
  <Route path="/post" element={<Post/>} />
  <Route path="/post" element={<Post/>} />
  {/* <Route path="/Stream" element={<Stream/>}/> */}
  </Routes>

   </div >
  )

}
export default App
