
import { Link } from "react-router-dom"
export default function Sidebar () {
    return (
       
        <ul className="sideBar">
           <li> <Link to="/Inbox">Inbox</Link></li>
           <li> <Link to="/Followers">Follwers</Link></li>
            <li>My Clubs</li>
            <li>Studio</li>
        </ul>
        
    )
}