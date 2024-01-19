import { useParams } from "react-router-dom"
import Follow from "./Follow";
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
        first_name: '',
        last_name:'',
        followers:[],
        following:[],
        img_url:'',
        username:''
    })

    useEffect((()=> {
      
     console.log('render')
      if (user_id === undefined) {
        setId(loginInitials.id)
    } else
    {setId(user_id)} 

    const docRef = doc(db, "users", id);
    getDoc(docRef).then((doc)=> {
    if (doc.exists()) {
      
        const data  = doc.data()
        const obj = {
            
            bio: data.bio,
            first_name: data.first_name,
            last_name: data.last_name,
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

,[id, loginInitials.id, user_id])
     

   

    
    
    

    const  followOrEdit = () => {
        if (loginInitials.id === user_id)
        {
            console.log('inside')
            return 'Edit'
        } else {
           
            return <Follow id={id}/>
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
            
            {followOrEdit()} 
            <p>{messageOrSettings()}</p>
            </div>

            <p>Followers: {user.followers.length}</p>
            <p>Following: {user.following.length}</p>
        </div>
        
    )
}