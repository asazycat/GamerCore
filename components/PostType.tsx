import {useState,useContext,useEffect, FormEvent} from 'react'
import { collection, addDoc, doc , getDoc} from "firebase/firestore"; 
import { LoginContext } from '../context/LoginContext'
import db from "../src/firebase"
import { Link } from 'react-router-dom';
export default function PostType (props: {active: string}) {


    

    const {active} = props
    const {loginInitials} = useContext(LoginContext)
   
   const [media, setMedia] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [user, setUser] = useState({username:''})
        const addDate = new Date()
        const theDate = addDate.toDateString()

    

        useEffect((()=> {
       
    
            const docRef = doc(db, "users", loginInitials.id);
            getDoc(docRef).then((doc)=> {
            if (doc.exists()) {
                
                const data  = doc.data()
                const doctoObj = {
                    username: data.username
                }
                setUser(doctoObj)
              
              } else {
               
                console.log("No such document!");
              }
                  })
        })
        
        ,[loginInitials.id])
     const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
      
           
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
                votes: [],
                comments: [],
                date: theDate,
                media_type: media
            })
           
     }
    

    if (active == "discussion")
    {
        return (
        <div className="discussionForm">
            <form onSubmit={e =>  handleSubmit(e)}>
        <div className='formEle'><label><textarea  value={title} onChange={e=> setTitle(e.target.value)} className='title' ></textarea></label></div>
        
        <div className='formEle'><label><textarea value={text} onChange={e=> setText(e.target.value)} className='discussion'></textarea></label></div>
        
        <Link to="/feed"><div className='shareSubmitButton'><button type='submit' className='share'>Share</button></div></Link>
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