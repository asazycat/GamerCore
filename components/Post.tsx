 import {ChangeEvent, useState} from 'react'
import PostType from './PostType'
export default function Post () {
   const [active, setActive] = useState('discussion')
   
    function postValue (e: ChangeEvent<HTMLInputElement>) {
        setActive(e.target.value)
    }

    return (
        <>
        <div className="postForm">
            <div className="postType">
           <label><button value='discussion' onClick={e => postValue(e)}>Discussion</button></label>
           <label><button value='video/Img' onClick={e => postValue(e)}>Vid/Img</button></label>
           </div>
          
        </div>
       <PostType active={active} />
       </>
    )
}