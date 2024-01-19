 import {MouseEvent, useState} from 'react'
import PostType from './PostType'
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
           <label><button value='discussion' onClick={e => postValue(e)}>Discussion</button></label>
           <label><button value='video/Img' onClick={e => postValue(e)}>Vid/Img</button></label>
           </div>
           <PostType active={active} />
        </div>
       
       </>
    )
}