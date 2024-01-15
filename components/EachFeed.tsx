import Votes from "./Votes"
import { IComments } from "../interfaces/interfaces"
import { Link } from "react-router-dom"
export default function EachFeed (props:{
    eachFeed: { 
    Feed_Id: string,
    user: string,
    post_title: string,
    post_content: string,
    votes: string[] ,
    comments: IComments[],
    date: string,
    media_type:string
},

}) 
{

    const {eachFeed} = props
  

   
    return (
        
        <li key={eachFeed.Feed_Id}>
            <div className="eachFeed">
           <Link to={`${eachFeed.Feed_Id}`} className="exceptionHyperLink"  ><p className="postTitle">{eachFeed.post_title}</p> </Link>
            <p className="userPost">{eachFeed.user}</p>
            <p className="postContent">{eachFeed.post_content}</p>
            <Votes eachFeed={eachFeed}  />
           
            <p className="date">{eachFeed.date}</p>
            <p className="comment_amount">Comments: {eachFeed.comments.length}</p>
            </div>
            </li>
           
    )
}