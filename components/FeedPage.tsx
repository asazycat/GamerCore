import { useEffect, useState , useContext} from "react"
import { LoginContext } from "../context/LoginContext"
import { getDoc , doc} from "firebase/firestore"
import db from '../src/firebase'
import { useParams } from "react-router-dom"
import { IFeedPage } from "../interfaces/interfaces"
import Comments from "./Comments"
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

    useEffect(()=> {
        if (Feed_Id != undefined)
        {
            setPostId(Feed_Id)
        }
        const docRef = doc(db, 'feed', postId)
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
      
                const data  = doc.data()
               
               setFeedPage(
                {
                    user: data.user,
                    post_title: data.post_title,
                    post_content:data.post_content,
                    votes: data.votes,
                    comments: data.comments,
                    media_type:data.media_type,
                    date: data.date

                }
               )
               
              } else {
               
                console.log("No such document!");
              }
        })
    }, [Feed_Id, loginInitials.id, postId])
    return (
        <div className="FeedPage">
       <h1 className="feedTitle">{feedPage.post_title}</h1> 
         <p className="feedUser">{feedPage.user}</p>
         <p className="feedContent">{feedPage.post_content}</p>
        
        
         <p className="feedDate">{feedPage.date}</p>
        <Comments id={postId} feed={feedPage}/>
         </div>
    )
}