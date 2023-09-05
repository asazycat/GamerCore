export default function EachFeed (props:{
    eachFeed: { 
    discussion_id: number,
    user: string,
    post_title: string,
    post_content: string,
    votes: number ,
    comment_amount: number,
    date: string
}}) 
{

    const {eachFeed} = props
    return (
        <li><div className="eachFeed">
            <p>cc</p>
            {eachFeed.user}</div></li>
    )
}