import {users} from "../dataTemp/data"
import { findUser } from "../util/util"
import EachSearchResult from "./EachSearchResult"
export default function SearchResult(props: {searchTerm: string}) {
    const {searchTerm} = props
    console.log(searchTerm)
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
