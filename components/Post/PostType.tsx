import {useState,useContext,useEffect, FormEvent} from 'react'
import { collection, addDoc, doc , getDoc} from "firebase/firestore"; 
import { LoginContext } from '../../context/LoginContext'
import db from "../../src/firebase"
import "./post.css";
export default function PostType (props: {active: string}) {


    

    const {active} = props
    const {loginInitials} = useContext(LoginContext)
   
   const [media, setMedia] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [user, setUser] = useState({username:''})
    const [platform, setPlatform] = useState('')
    const [game, setGame] = useState('')
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
     console.log(active)
        e.preventDefault()
        if (active === 'Discussion') {
            setMedia('Discussion')
        console.log('handleSubmit')
    
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
                Platform: platform,
                Game: game,
                LFG_description: text,
                // LFG_tags: string[]
            })
        }
     }
    

    if (active == "Discussion")
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
        <div className='platformGame'>
       
                
       <div> Platform<select name="platform" className='platformSelect' onChange={e=> setPlatform(e.target.value)}>
            <option value="xbox">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="PC">PC</option>
            <option value="All">All</option>
        </select>
        </div>

        <div>Game<label><textarea  value={game} onChange={e=> setGame(e.target.value)} className='game' ></textarea></label></div>
       
        </div>


        <div className='formEle'><label><textarea  value={title} onChange={e=> setTitle(e.target.value)} className='title' ></textarea></label></div>
        
        <div className='formEle'><label><textarea value={text} onChange={e=> setText(e.target.value)} className='discussion'></textarea></label></div>
        
    <div className='shareSubmitButton'><button type='submit' className='share'>Post LFG</button></div>
    </form>
    </div>
        )
    }
}