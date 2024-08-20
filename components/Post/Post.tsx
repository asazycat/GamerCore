 import {MouseEvent, useState} from 'react'
import PostType from './PostType.tsx'
import "./post.css";
export default function Post () {
   const [active, setActive] = useState('discussion')
   
    function postValue (e: MouseEvent<HTMLButtonElement>) {
        const value = e.target as HTMLButtonElement
        setActive(value.value)
    }

    return (
        <>
        <div className="postForm">
            <div className="postType">
           <label><button value='discussion' onClick={e => postValue(e)} className='share'>Discussion</button></label>
           <label><button value='LFG' onClick={e => postValue(e)} className="share">LFG</button></label>
           </div>
           <PostType active={active} />
        </div>
       
       </>
    )
}