import { useParams } from "react-router-dom"

import {  useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, getDoc } from "firebase/firestore";
import db from "../src/firebase"




export default function User () {

    const {loginInitials} = useContext(LoginContext)
    const {user_id} = useParams()
   const [id, setId] = useState(loginInitials.id)
    const [user, setUser] = useState({
        bio:'',
      
        followers:[],
        following:[],
        img_url:'',
        username:''
    })

    useEffect((()=> {
      
        if (user_id === undefined) {
            setId('loginInitials.id')
        } else
        {setId(user_id)}  
      

    const docRef = doc(db, "users", id);
    getDoc(docRef).then((doc)=> {
    if (doc.exists()) {
      
        const data  = doc.data()
        const obj = {
            bio: data.bio,
            username: data.username,
            followers: data.followers,
            following: data.following,
            img_url: data.img_url
        }
        setUser(obj)
       
      } else {
       
        console.log("No such document!");
      }
          })
})

,[id, user_id])
     

   

    
    
    

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