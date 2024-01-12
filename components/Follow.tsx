
import { useEffect, useContext,useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, updateDoc } from "firebase/firestore"
import db from "../src/firebase"


export default function Follow (props: {id:string, obj:{username: string, first_name: string, last_name: string, following: string[], followers: string[], bio: string, img_url: string}}) {

    const {id,obj} = props
  
    const {loginInitials} = useContext(LoginContext)
    const [newFollowers, setNewFollowers] = useState(obj.followers)
    const followers = [...obj.followers]

    const addfollower = () => {

        if (followers.includes(loginInitials.id))
        {
            const deleFollower =  followers.filter((element) => element !== loginInitials.id)
            setNewFollowers(deleFollower)
        }
        else {
        followers.push(loginInitials.id)
        setNewFollowers(followers)
        }
    }



    useEffect(()=> {
       
    
        console.log('through')
        const docRef = doc(db, "users",  id)
     
        updateDoc(docRef, {
           
            
            followers: newFollowers,
           
        })
    }, [id, newFollowers])


   
    

    return (
        <>
        <button onClick={addfollower}>Follow!</button>
        </>
    )
}