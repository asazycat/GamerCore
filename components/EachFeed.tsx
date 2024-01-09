export default function EachFeed (props:{
    eachFeed: { 
    Feed_Id: string,
    user: string,
    post_title: string,
    post_content: string,
    votes: number ,
    comment_amount: number,
    date: string,
    media_type:string
},
 
}) 
{

    const {eachFeed} = props
    

   
    return (
        <li><div className="eachFeed">
            <p className="postTitle">{eachFeed.post_title}</p>
            <p className="userPost">{eachFeed.user}</p>
            <p className="postContent">{eachFeed.post_content}</p>
            <p className="votes">{eachFeed.votes} Upvote</p>
           
            <p className="date">{eachFeed.date}</p>
            <p className="comment_amount">Comments: {eachFeed.comment_amount}</p>
            </div></li>
    )
}