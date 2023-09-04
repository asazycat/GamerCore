import SearchBar from "./SearchBar";
import Profile from "./Profile"
import {Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import SearchResult from "./SearchResult";
export default function Header () {
    return (
        <>
        
        <div className="upperBar">
           
        <SearchBar/>
          
            <ul className="navigation">
          
                <li><Link to="/Feed">Feed</Link></li>
                <li><Link to="/LFG">LFG</Link></li>
                <li>Clubs</li>
                <li>Stream</li>
                
            </ul>
        
        <Profile/>
        </div>
        <SearchResult/>
        <Sidebar/>
       </>
    )
}