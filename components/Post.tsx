import {useState} from 'react'
import PostType from './PostType'
export default function Post () {
   const [active, setActive] = useState('video/img')
   
    function postValue (e) {
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