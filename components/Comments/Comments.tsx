import { FormEvent } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { IComments } from "../../interfaces/interfaces";
import getFeedPage from "../../util/asyncFunctions";
import db from '../../src/firebase'
import ListOfComments from "./ListOfComments";
// import  {CommentsC}  from "../../classes/FeedClass";
export default function Comments(props: {id:string}) {


  
    const {id} = props
    const addDate = new Date()
    const theDate = addDate.toDateString()
    const [comments, setComments] = useState<IComments[]>([])
    const [commentText, setCommentText] = useState('')
    
    
   

    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
       

        e.preventDefault()
        
        const data = (await getFeedPage(id)).data();

        // if (document.exists()) 
        //     {
        //     const data  = document.data().comments;
        //     console.log(data)
        //     const allComments = new CommentsC(data);
           
           
        //     allComments.newComment(allComments.CommentLength,commentText,theDate,0);
        //    console.log(allComments.comments)
        //    setComments(allComments.comments)
        // } else {console.log()}

        if (data !== undefined) {
            console.log(data)
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