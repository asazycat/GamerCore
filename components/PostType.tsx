import {useState,useContext,useEffect, ReactEventHandler} from 'react'



import { collection, addDoc, doc , getDoc} from "firebase/firestore"; 
import { LoginContext } from '../context/LoginContext'
import db from "../src/firebase"
export default function PostType (props: {active: string}) {


    

    const {active} = props
    const {loginInitials} = useContext(LoginContext)
   
   const [media, setMedia] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [user, setUser] = useState({})
        const addDate = new Date()
        const theDate = addDate.toDateString()

    

        useEffect((()=> {
       
    
            const docRef = doc(db, "users", loginInitials.id);
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
     const handleSubmit =  async (e) => {
           
        e.preventDefault()
        if (active === 'discussionForm') {
            setMedia('Discussion')
        }
        else {
            setMedia('Vid/Img')
        }
         await addDoc( collection(db, 'feed'), {
                user: user.username,
                post_title: title,
                post_content: text,
                votes: 0,
                comment_amount: 0,
                date: theDate,
                media_type: media
            })
           
     }
    

    if (active == "discussion")
    {
        return (
        <div className="discussionForm">
            <form onSubmit={e =>  {handleSubmit(e)}}>
        <label>title<textarea value={title} onChange={e=> setTitle(e.target.value)}></textarea></label>
        
        <label>discussion<textarea value={text} onChange={e=> setText(e.target.value)}></textarea></label>
        
        <button type='submit' >Share Post</button>
        </form>
        </div>)
    }
    else {
        return (
        <div className="videoImg">
            <h1>Video</h1>
        <form onSubmit={e => handleSubmit(e)}>
   
    
    <button type='submit'>Share Post</button>
    </form>
    </div>
        )
    }
}