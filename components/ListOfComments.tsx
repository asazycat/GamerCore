import { useEffect, useState } from "react";
import { IComments } from "../interfaces/interfaces";
import { doc,getDoc } from "firebase/firestore";
import db from '../src/firebase'
export default function ListOfComments (props: {id:string}) {

    const {id} = props

    const [commentList, setCommentList] = useState<IComments[]>([])
   
   useEffect(()=> {
    const docRef = doc(db, "feed", id)
         getDoc(docRef).then((doc)=> {
            if (doc.exists())
            {
            const data = doc.data()
           setCommentList(data.comments)
            } else {
       
                console.log("No such document!");
              }
        })
        
   },[id])
    return (

       <ul>{ commentList.map((eachComment )=> { 
        console.log(eachComment)
        return <li>{eachComment.commentText}</li>
    })}
    </ul>
    )
}