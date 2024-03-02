
import { useEffect, useContext,useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, updateDoc,getDoc } from "firebase/firestore"
import db from "../src/firebase"


export default function Follow (props: {id:string}) {

    const {id} = props
   
    const {loginInitials} = useContext(LoginContext)
    const [newFollowers, setNewFollowers] = useState([])
    const [newFollowing, setNewFollowing] = useState([])

    const addfollower = async () => {
      
        const docRef = doc(db, "users", id)
        const data =  (await getDoc(docRef)).data()
      
           if (data !== undefined)
        {
          
        const followers = data.followers
        const following = data.following
        if (followers.includes(loginInitials.id))
        {
            const deleFollower =  followers.filter((element: string) => element !== loginInitials.id)
            setNewFollowers(deleFollower)
            const deleFollowing = following.filter((element:string)=> element !== id)
            setNewFollowing(deleFollowing)
        }
        else {
         
        followers.push(loginInitials.id)
        setNewFollowers(followers)
        following.push(id)
        setNewFollowing(following)
        }
    
    }
    }

    useEffect(()=> {
       
        
    
        const docRef = doc(db, "users",  id)
     
        updateDoc(docRef, {
           
           
            followers: newFollowers,
           
        })
    
        updateDoc(doc(db, "users",  loginInitials.id), {
            following: newFollowing
        })
    
    }, [newFollowers,newFollowing])


   
    

    return (
        <>
        <button onClick={addfollower}  className="follow">Follow!</button>
        </>
    )
}