import {useState,useContext,useEffect, FormEvent} from 'react'
import { collection, addDoc, doc , getDoc} from "firebase/firestore"; 
import { LoginContext } from '../context/LoginContext'
import db from "../src/firebase"

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
        else {
            await addDoc( collection(db, 'lfg'), {
                LFG_Poster:user.username,
                LFG_title:title,
                // Platform: string,
                // Game: string,
                LFG_description: text,
                // LFG_tags: string[]
            })
        }
     }
    

    if (active == "discussion")
    {
        return (
        <div className="discussionForm">
            <h1 className='head'>Feed</h1>
            <form onSubmit={e =>  handleSubmit(e)}>
        <div className='formEle'><label><textarea  value={title} onChange={e=> setTitle(e.target.value)} className='title' ></textarea></label></div>
        
        <div className='formEle'><label><textarea value={text} onChange={e=> setText(e.target.value)} className='discussion'></textarea></label></div>
        
        <div className='shareSubmitButton'><button type='submit' className='share'>Share</button></div>
        </form>
        </div>)
    }
    else {
        return (
        <div className="createLFG">
            <h1 className='head'>LFG</h1>
        <form onSubmit={e => handleSubmit(e)}>
        <div className='formEle'><label><textarea  value={title} onChange={e=> setTitle(e.target.value)} className='title' ></textarea></label></div>
        
        <div className='formEle'><label><textarea value={text} onChange={e=> setText(e.target.value)} className='discussion'></textarea></label></div>
        
    <div className='shareSubmitButton'><button type='submit' className='share'>Post LFG</button></div>
    </form>
    </div>
        )
    }
}