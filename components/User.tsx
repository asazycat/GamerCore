import { useParams } from "react-router-dom"
import { users } from "../dataTemp/data"
export default function User () {

    const {user_id} = useParams()
    
    const givenUser = users[Number(user_id) - 1] 

    return (
        <div className="userPage">
            <div className="userBioImg">
            <img src={`${givenUser.img_url}`} width="200" height="200" className="pageProfile"/>
            <div className="secondPart">
           <p className="username">{givenUser.username}</p>
            <p className="bioResult"> {givenUser.bio}</p>
            </div>
            <p>Follow </p>
            <p>Message</p>
            </div>

            <p>Followers: {givenUser.followers.length}</p>
            <p>Following: {givenUser.following.length}</p>
        </div>
        
    )
}