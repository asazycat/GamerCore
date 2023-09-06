import {users} from "../dataTemp/data"
import { findUser } from "../util/util"
export default function SearchResult(props: {searchTerm: string}) {
    const {searchTerm} = props
    console.log(searchTerm)
    return (
        
        <div className="searchResult">
            {
                findUser(users, searchTerm).map((element) => element.username)
            }
        </div>
    )
}
