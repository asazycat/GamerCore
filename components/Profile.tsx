import { LoginContext } from "../context/LoginContext"
import { useContext } from "react"
import {users} from "../dataTemp/data"
import { getUserDetails } from "../util/util"
export default function Profile ()
{
    const {user} = useContext(LoginContext)
    console.log(user)
    const profileName = getUserDetails(users,user.username)
return (
<div className="userProfile">
    <img src={profileName.img_url} height="100px" width="100px" className="proImg"/>
   <div className="proNameProfile"> 
    <p>{profileName.username}</p>
    <p>Profile</p>
    </div>
</div>
)
}