import { useParams } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, getDoc } from "firebase/firestore";
import db from "../src/firebase"
export default function User () {

    const {loginInitials} = useContext(LoginContext)
    const {user_id} = useParams()
  
    const [user, setUser] = useState({
        bio:'',
        first_name:'',
        last_name:'',
        followers:[],
        following:[],
        img_url:'',
        username:''
    })
    console.log(user_id)
    useEffect((()=> {
       
    
    const docRef = doc(db, "users", user_id);
    getDoc(docRef).then((doc)=> {
    if (doc.exists()) {
        console.log('exists ')
        const data  = doc.data()
        setUser(data)
        console.log("Document data:", doc.data());
      } else {
       
        console.log("No such document!");
      }
          })
})

,[])
     

   

    
    
    

    const followOrEdit = () => {
        if (loginInitials.id === user_id)
        {
            return 'Edit'
        }
        else {
            return 'Follow'
        }
    }

    const messageOrSettings = () => {
        if (loginInitials.id === user_id)
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
            <img src={`${user.img_url}`} width="200" height="200" className="pageProfile"/>
            <div className="secondPart">
           <p className="username">{user.username}
           </p>
            <p className="bioResult"> {user.bio}</p>
            </div>
            
            <p>{followOrEdit()} </p>
            <p>{messageOrSettings()}</p>
            </div>

            <p>Followers: {user.followers.length}</p>
            <p>Following: {user.following.length}</p>
        </div>
        
    )
}