import { LoginContext } from "../../context/LoginContext"
import { useContext, useEffect,useState } from "react"
import { getAuth,signOut   } from "firebase/auth";
import { IProfile } from "../../interfaces/interfaces";
import { Link } from "react-router-dom"
import "./profile.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../src/firebase"



export default function Profile ()
{     


   
    const {loginInitials} = useContext(LoginContext)
  
    const [profile, setProfile] = useState<IProfile>({
        username:'',
        img_url:''})
    function signingOut () {
       
        const auth = getAuth()
        
        signOut(auth)
        
    }

useEffect((()=> {
  
    const docRef = doc(db, "users", loginInitials.id);
 
    getDoc(docRef).then((doc)=> {
    if (doc.exists()) {
        
        const pro = doc.data()
        const profileDetails = {
            username: pro.username,
            img_url: pro.img_url
        }
        setProfile(profileDetails)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
          })
}),[loginInitials.id])


return (
<div className="userProfile">
    <img src={`${profile.img_url}`}  className="proImg"/>
   <div className="proNameProfile"> 
   
    <p className ="userName"><Link to ={`${loginInitials.id}` }  >{profile.username}</Link></p>
    <button className="signOut" onClick={signingOut}>Sign Out</button>
    </div>
</div>
)
}