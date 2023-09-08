
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import Feed from '../components/Feed'
import LFG from '../components/LFG'
import User from '../components/User'
import { useState } from 'react';

import Login from '../components/Login.tsx'
function App() {
 
 const [login, setLogin] = useState(false)
    if (login ===false) {
      return (<Login login={login} setLogin={setLogin}/>)
    }
    else
return (
   <section>
   <Header/> 
  <Routes>
  <Route path="/feed" element={<Feed />} />
  <Route path="/LFG" element={<LFG />} />
  <Route path="/:user_id" element={<User />} />
  </Routes>
   </section>
  )

}
export default App
