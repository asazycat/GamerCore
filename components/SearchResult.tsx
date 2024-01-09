import { useEffect,useState } from "react"
import { findUser } from "../util/util"
import EachSearchResult from "./EachSearchResult"
import { getDocs, collection } from "firebase/firestore"
import db from "../src/firebase"

interface IUsers {
    user_id: number,
    username: string ,
    img_url: string,
    bio: string,
    first_name: string,
    last_name: string,
    email: string,
    followers: number[],
    following: number[]
    password:string
}

export default function SearchResult(props: {searchTerm: string}) {
    const {searchTerm} = props
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(()=> {
        (async () => {
            const colRef = collection(db, 'users')

            const snapshot = await getDocs(colRef)
            const docs = snapshot.docs.map(doc => {return { user_id: doc.id, ...doc.data()}})
 
            setUsers(docs)
        }) ()
        
    },[])
    return (
        
        <div className="searchResult">

        <ul>
            {
                
                findUser(users, searchTerm).map((eachSearchResult) => {
                   return <EachSearchResult searchResult={eachSearchResult}/>
                })
            }
        </ul>
        </div>
    )
}
