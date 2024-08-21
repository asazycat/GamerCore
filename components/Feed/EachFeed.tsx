import Votes from ".././Votes"
import {IFeed } from "../../interfaces/interfaces"
import { Link } from "react-router-dom"
import "./eachfeed.css"



export default function EachFeed (props:{eachFeed: IFeed}) {
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