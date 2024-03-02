import axios from "axios"

import { useEffect, useState } from "react"
import api from "../src/api"
export default function ListOfStreamsLive () {
   const [thumbnail, setThumbnail] = useState<string>('')
   
    useEffect(()=> {
        const apiMaker = async () => {
          
        
        
          api.get(`https://api.twitch.tv/helix/streams/followed?user_id=689245592`).then(res => {
            console.log()
          setThumbnail(res.data.data[0].thumbnail_url)
       }).catch(err=> {console.log(err.code)})
        }
  apiMaker()

       
    },[thumbnail])
console.log(thumbnail)
    return (
        <img src={thumbnail}  height="200" width="100"/>
    )
}