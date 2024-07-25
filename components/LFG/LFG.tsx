
import { useState,useEffect } from "react"
import EachLFG from "./EachLFG.tsx"

import {platformFilter} from '../../util/util.ts'
import { Link } from "react-router-dom"
import db from "../../src/firebase.ts"
import { ILFG } from "../../interfaces/interfaces.ts"
import { getDocs, collection} from "firebase/firestore"
export default function LFG () {

    const [platform, setPlatform] = useState("")
    const [search, setSearchTerm] = useState('Search')
    const [LFG, setLFG] = useState<ILFG[]>([])
    
    useEffect(()=> {
        (async () => {
            const colRef = collection(db, 'lfg')

            const snapshot = await getDocs(colRef)
          
            const docs = snapshot.docs.map(doc => {
                const info = doc.data()
                
                return { 
                LFG_id:doc.id,
                LFG_Poster:info.LFG_Poster,
                LFG_title:info.LFG_title,
                Platform: info.Platform,
                Game: info.Game,
                LFG_description: info.LFG_description,
                LFG_tags: info.LFG_tags
            }
        })
            
            setLFG(docs)
        }) ()
    },[])

    console.log(search)

    return (
        <>
          <div className="platform">
                <div><label><input type="radio" name="radio" value="" onChange={e=> setPlatform(e.target.value)} />All</label></div>
                <div><label><input type="radio" name="radio" value="xbox" onChange={e=> setPlatform(e.target.value)}/>XBOX</label></div>
                <div> <label><input type="radio" name="radio" value="Playstation" onChange={e=> setPlatform(e.target.value)}/>PLAYSTATION</label></div>
                <div><label><input type="radio" name="radio" value="PC" onChange={e=> setPlatform(e.target.value)}/>PC</label></div>
                
            </div>
            <div className="LFGButton">
               <Link to="/Post"><button className="share">Create LFG</button> </Link> 
              <div><label className="searchGame">Search<input type="text" onChange={e=> setSearchTerm(e.target.value)}/>    </label></div>
            </div>
        <div className="LFG">
          
       {

        platformFilter(LFG, platform).map((element) => {
        return <EachLFG eachLFG={element}/>
       })
       }
        </div>
        </>
    )
    
}