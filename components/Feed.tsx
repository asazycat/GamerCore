import { useEffect, useState } from "react"

import EachFeed from "./EachFeed"
import {sortByMap} from "../util/util"
import db from "../src/firebase"
import { Link } from "react-router-dom"
import { getDocs, collection } from "firebase/firestore"

interface IFeed  {
    Feed_Id: string,
    user: string,
    post_title: string,
    post_content: string,
    votes: number,
    comment_amount: number,
    date: string,
    media_type: string;
}



export default function Feed () {
    
    const [selectedSortBy, setselectedSortBy] = useState("")
const [feed, setFeed] = useState<IFeed[]>([])

    useEffect(()=> {
        (async () => {
            const colRef = collection(db, 'feed')

            const snapshot = await getDocs(colRef)
          
            const docs = snapshot.docs.map(doc => {
                const info = doc.data()
                return { 
                Feed_Id: doc.id, 
                user: info.user,
                post_title: info.title,
                post_content: info.post_content,
                votes: info.votes,
                comment_amount: info.comment_amount,
                date: info.date,
                media_type: info.media_type
            }
        })
            
            setFeed(docs)
        }) ()
        
    },[])
      
      
      
      
    
       
   
    

   
    
    return (
        <>
        <div className="postButton"><label><Link to="/post"><button className="share" >Share</button></Link></label></div>
        <div className="format">

            <div className="selectBoxes">
            <div className="sortBy">
            <label>
                Sort By:
                <select name="sortBy" value={selectedSortBy} onChange={e=> setselectedSortBy(e.target.value)}>
                <option value="" ></option>
                    <option value="popularity" >Popularity</option>
                    <option value="commentAmount" >Most Commented</option>  
                </select>
            </label>
            </div>

            <div className="filter">
            <label>
                Filter:
                <select name="filter" defaultValue="">
                    <option value="" ></option>
                    <option value="following" >Following</option>
                    <option value="voted" >Upvoted</option>
                    <option value="voted" >Video/Img</option>
                    <option value="voted" >Discussion</option>
                </select>
            </label>
            </div>
            </div>
            

             

            <div className="feedList">
            {
            sortByMap(feed, selectedSortBy).map((eachFeed:{
                Feed_Id: string,
                user: string,
                post_title: string,
                post_content: string,
                votes: number,
                comment_amount: number,
                date: string,
                media_type: string
                
            }) => {return <EachFeed eachFeed={eachFeed} key={eachFeed.Feed_Id}/>
            } )
            }
            </div>
         </div>
         </>


    )}
    