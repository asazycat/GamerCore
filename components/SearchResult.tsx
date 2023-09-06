import {users} from "../dataTemp/data"
export default function SearchResult(props: {searchTerm: string}) {
    const {searchTerm} = props
    console.log(searchTerm)
    return (
        
        <div className="searchResult">
            <p>Search Results</p>
        </div>
    )
}
