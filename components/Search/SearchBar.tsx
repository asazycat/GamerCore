
import "./search.css";
export default function SearchBar(props: {searchTerm: string,   setSearchTerm: (term: string)=> void}) {
    const {searchTerm} = props
    const {setSearchTerm} = props

    return (
        <>
        <div className="searchBar">
           <label>Search <input name="search" defaultValue={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input></label>
        </div>
        
        </>
    )
}