import { useEffect,useState } from "react"
import { findUser } from "../../util/util"
import {IUsers } from "../../interfaces/interfaces"
import EachSearchResult from "./EachSearchResult"
import { getDocs, collection } from "firebase/firestore"
import db from "../../src/firebase"



export default function SearchResult(props: {searchTerm: string}) {
    const {searchTerm} = props
    const [users, setUsers] = useState<IUsers[]>([])
    

    useEffect(()=> {
        (async () => {
            const colRef = collection(db, 'users')

            const snapshot = await getDocs(colRef)
            const docs = snapshot.docs.map(doc => {
                
                const info = doc.data()
                return { 
                    user_id: doc.id,
                    username: info.username ,
                    img_url: info.img_url,
                    bio: info.bio,
                    first_name: info.first_name,
                    last_name: info.last_name,
                    email: info.email,
                    followers: info.followers,
                    following: info.following,
                    
            }})
 
            setUsers(docs)
        }) ()
        
    },[])
    return (
        
        <div className="searchResult">

        <ul>
            {
                
                findUser(users, searchTerm).map((eachSearchResult) => {
                   return <EachSearchResult searchResult={eachSearchResult} />
                })
            }
        </ul>
        </div>
    )
}
