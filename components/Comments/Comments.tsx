import { FormEvent } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { IComments } from "../../interfaces/interfaces";

import db from '../../src/firebase'
import ListOfComments from "./ListOfComments";

export default function Comments(props: {id:string}) {


  
    const {id} = props
    const addDate = new Date()
    const theDate = addDate.toDateString()
    const [comments, setComments] = useState<IComments[]>([])
    const [commentText, setCommentText] = useState('')
    
    
   

    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
       

        e.preventDefault()
        const docRef = doc(db, "feed", id)
        const data = (await getDoc(docRef)).data()

        if (data !== undefined) {
            const newComments = data.comments
        
            console.log(newComments)
        
        newComments.push({
            comment_id: comments.length,
            commentText: commentText,
            commentVotes:0,
            date: theDate

        })
     
        setComments(newComments)
    }
    }

    useEffect(()=> {
       
        const docRef = doc(db, "feed", id)
         
            updateDoc(docRef, {
            
             comments: comments
               
            })
               
        
    }, [comments])

  
    return (
        
           
      <div>
        <form onSubmit={e =>  {handleSubmit(e)}}>
            <label>Post Comment<input type="text" value={commentText} onChange={e => setCommentText(e.target.value)}></input></label>
            <button type="submit">Post</button>
            </form>
            <ListOfComments id={id}/>
            </div>
    )
}