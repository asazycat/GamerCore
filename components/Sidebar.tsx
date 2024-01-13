
import { Link } from "react-router-dom"
export default function Sidebar () {
    return (
        <div className="sidebar">
        <ul>
            <Link to="/Inbox"><li>Inbox</li></Link>
            <Link to="/Followers"><li>Follwers</li></Link>
            <li>My Clubs</li>
            <li>Studio</li>
        </ul>
        </div>
    )
}