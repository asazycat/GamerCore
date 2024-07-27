import { useEffect, useState , useContext} from "react"
import { LoginContext } from "../../context/LoginContext"

import { useParams } from "react-router-dom"
import { IFeedPage } from "../../interfaces/interfaces"
import { FeedPageC } from "./FeedClass"
import Comments from "../Comments/Comments"
import getFeedPage from "../../util/asyncFunctions"
export default function FeedPage () {


    
    const {Feed_Id} = useParams()
    const {loginInitials} = useContext(LoginContext)
    const [postId, setPostId] = useState(loginInitials.id)
    const [feedPage, setFeedPage] = useState<IFeedPage>({
        post_title:'',
        post_content:'',
        comments:[],
        votes: [],
        date:'',
        user: '',
        media_type:''
    })

    useEffect(()=> 
    {
    if (Feed_Id != undefined){setPostId(Feed_Id)}

        (async() => 
            {
            const document = await getFeedPage(postId)
            if (document.exists()) 
                {
                const data  = document.data();
                const FeedPage = new FeedPageC(data.user,data.post_title,data.post_content,data.votes,data.comments,data.date,data.media_type);
                setFeedPage(FeedPage)
            } else {console.log("No such document!")}
            } 
        )()       
    }, [Feed_Id, loginInitials.id, postId])
    return (
        <div className="FeedPage">
       <h1 className="postTitle">{feedPage.post_title}</h1> 
         <p className="userPost">{feedPage.user}</p>
         <p className="postContent">{feedPage.post_content}</p>
        
        
         <p className="feedDate">{feedPage.date}</p>
        <Comments id={postId} />
         </div>
            )
}


