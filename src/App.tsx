
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Feed from './components/Feed'
import LFG from './components/LFG'

function App() {
 

  return (
   <section>
   <Header/> 
  <Routes>
  <Route path="/feed" element={<Feed />} />
  <Route path="/LFG" element={<LFG />} />
  </Routes>
   </section>
  )
}

export default App
