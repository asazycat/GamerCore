import { useParams } from "react-router-dom"
import { users } from "../dataTemp/data"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
export default function User () {

     

    const {user} = useContext(LoginContext)

    const {user_id} = useParams()
    
    const givenUser = users[Number(user_id) - 1] 

    const followOrEdit = () => {
        if (user.username === givenUser.username)
        {
            return 'Edit'
        }
        else {
            return 'Follow'
        }
    }

    const messageOrSettings = () => {
        if (user.username === givenUser.username)
        {
            return 'Settings'
        }
        else {
            return 'Message'
        }
    }

    return (
        <div className="userPage">
            <div className="userBioImg">
            <img src={`${givenUser.img_url}`} width="200" height="200" className="pageProfile"/>
            <div className="secondPart">
           <p className="username">{givenUser.username}
           </p>
            <p className="bioResult"> {givenUser.bio}</p>
            </div>
            
            <p>{followOrEdit()} </p>
            <p>{messageOrSettings()}</p>
            </div>

            <p>Followers: {givenUser.followers.length}</p>
            <p>Following: {givenUser.following.length}</p>
        </div>
        
    )
}