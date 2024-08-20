
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from '../components/Header/Header.tsx'
import Feed from '../components/Feed/Feed.tsx'
import LFG from '../components/LFG/LFG.tsx'
import User from '../components/Profile/User.tsx'
import { useState } from 'react';
import Inbox from '../components/SiderBar/Inbox.tsx'
import Login from '../components/Login/Login.tsx'
import Post from '../components/Post/Post.tsx'
import Followers from '../components/Follow/Followers.tsx'
import FeedPage from '../components/Feed/FeedPage.tsx'

import Stream from '../components/SiderBar/Stream.tsx'
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
    <Route path="/" element={<Feed/>}/>
    <Route path="Feed/:Feed_Id" element={<FeedPage/>}/>
    <Route path="/Followers" element = {<Followers/>}/> 
    <Route path="/Inbox" element={<Inbox/>}/>
  <Route path="/feed" element={<Feed />} />
  <Route path="/LFG" element={<LFG />} />
  <Route path=":user_id" element={<User/>} />
  <Route path="/post" element={<Post/>} />
  <Route path="/post" element={<Post/>} />
  <Route path="/Stream" element={<Stream/>}/>
  </Routes>

   </div >
  )

}
export default App
