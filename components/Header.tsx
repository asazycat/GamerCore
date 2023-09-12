import SearchBar from "./SearchBar";
import Profile from "./Profile"
import {Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import SearchResult from "./SearchResult";
import { useState } from 'react';

export default function Header (props) {
    const {setLogin} = props
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchTerm = (term: string) => {
        setSearchTerm(term)
    }
    console.log(searchTerm)
    return (
        <>
        
        <div className="upperBar">
           
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchTerm}/>
          
            <ul className="navigation">
          
                <li><Link to="/Feed">Feed</Link></li>
                <li><Link to="/LFG">LFG</Link></li>
                <li>Clubs</li>
                <li>Stream</li>
                
            </ul>
        
        <Profile setLogin={setLogin}/>
        </div>
        <SearchResult searchTerm={searchTerm}/>
        <Sidebar/>
       </>
       
    )
    
}