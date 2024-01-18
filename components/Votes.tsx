
import { useEffect, useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { doc, setDoc } from "firebase/firestore"
import db from "../src/firebase"
import { IComments } from "../interfaces/interfaces"
export default function Votes (props:{
    eachFeed: { 
    Feed_Id: string,
    user: string,
    post_title: string,
    post_content: string,
    votes: string[] ,
    comments: IComments[],
    date: string,
    media_type:string
}}) {
    const {eachFeed} = props
    

    const newVotes = [...eachFeed.votes]
    const [displayVote, setDisplayVote] = useState(eachFeed.votes.length)
    const [state, setState] = useState(newVotes)
    const {loginInitials} = useContext(LoginContext)
 
        function upvote() {
            
        
                if (state.includes(loginInitials.id))
                {
                    
                    const deleVotes =  newVotes.filter((element) => element !== loginInitials.id)
                    setState(deleVotes)
                  
                    setDisplayVote(deleVotes.length)
                }
                else {
                
                    newVotes.push(loginInitials.id)
                    setDisplayVote(newVotes.length)
                    setState(newVotes)
               
                }
                
            
        
          

        }
     
    useEffect(()=> {
        const docRef = doc(db, "feed", eachFeed.Feed_Id)
     
        setDoc(docRef, {
            user: eachFeed.user,
            post_title: eachFeed.post_title,
            post_content:eachFeed.post_content,
            comments:eachFeed.comments,
            date:eachFeed.date,
            votes: state
        })
    }, [displayVote, eachFeed.Feed_Id, eachFeed.comments, eachFeed.date, eachFeed.post_content, eachFeed.post_title, eachFeed.user, state])



    return (
        <>
       <p className="votes"> {displayVote}<button onClick={upvote} className="voteButton">Λ</button></p>
        </>
    )
}