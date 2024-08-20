import SearchBar from "../Search/SearchBar";
import Profile from "../Profile/Profile"
import {Link } from 'react-router-dom';
import Sidebar from "../SiderBar/Sidebar";
import SearchResult from "../Search/SearchResult";
import "./header.css"
import { useState } from 'react';

export default function Header () {

    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchTerm = (term: string) => {
        setSearchTerm(term)
    }
  
    return (
        <>
        
        <div className="upperBar">
           
       
          
            <ul className="navigation">
          
                <li><Link to="/Feed">Feed</Link></li>
                <li><Link to="/LFG">LFG</Link></li>
                <li>Clubs</li>
                <li><Link to="/">Stream</Link></li>
                
            </ul>
        
        <Profile/>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchTerm}/>
        <SearchResult searchTerm={searchTerm}/>

        <Sidebar/>
       </>
       
    )
    
}