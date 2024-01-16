
import { useEffect, useContext,useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, updateDoc,getDoc } from "firebase/firestore"
import db from "../src/firebase"


export default function Follow (props: {id:string}) {

    const {id} = props
  
    const {loginInitials} = useContext(LoginContext)
    const [newFollowers, setNewFollowers] = useState([])
    

    const addfollower = async () => {
      
        const docRef = doc(db, "users", id)
        const data =  (await getDoc(docRef)).data()
      
           if (data !== undefined)
        {
            console.log(data)
        const followers = data.followers
        console.log(followers)
        if (followers.includes(loginInitials.id))
        {
            const deleFollower =  followers.filter((element: string) => element !== loginInitials.id)
            setNewFollowers(deleFollower)
        }
        else {
         
        followers.push(loginInitials.id)
        setNewFollowers(followers)
        }
    
    }
    }

    useEffect(()=> {
       
        
    
        console.log('through')
        const docRef = doc(db, "users",  id)
     
        updateDoc(docRef, {
           
            
            followers: newFollowers,
           
        })
    }, [newFollowers])


   
    

    return (
        <>
        <button onClick={addfollower}>Follow!</button>
        </>
    )
}