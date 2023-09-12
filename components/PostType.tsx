import {useState} from 'react'
import { LoginContext } from "../context/LoginContext"
import { useContext } from "react"
import {users} from '../dataTemp/data'
import { getIdByUsername } from '../util/util'
import { discussionPosts } from '../dataTemp/data'
export default function PostType (props: {active: string}) {


     

    const {active} = props
    const {user} = useContext(LoginContext)
   const id = getIdByUsername(users, user.username)
   
    console.log(id,user)
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    function handleSubmit (e) {
          e.preventDefault()
          discussionPosts.push( 
            {
                discussion_id: id,
                user: user.username,
                post_title: title,
                post_content:text,
                votes: 0,
                comment_amount: 0,
                date: new Date().toDateString()
          })
          setText('')
    }


    if (active == "discussion")
    {
        return (
        <div className="discussionForm">
            <form onSubmit={e => handleSubmit(e)}>
        <label>title<textarea value={title} onChange={e=> setTitle(e.target.value)}></textarea></label>
        
        <label>discussion<textarea value={text} onChange={e=> setText(e.target.value)}></textarea></label>
        
        <button type='submit'>Share Post</button>
        </form>
        </div>)
    }
    else {
        return 'Video/Image'
    }
}