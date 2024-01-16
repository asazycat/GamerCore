import { Link } from "react-router-dom"
import { IUsers } from "../interfaces/interfaces"
export default function EachSearchResult(props: {searchResult: IUsers}) {
    const {searchResult} = props
    return (
        <li>
             <Link to ={`/${searchResult.user_id}`} >
        <div className="eachSearch">
       

         <div className="top">
        <img src={searchResult.img_url} alt={searchResult.username} height="75" width="75" className="searchImg"/>
        <p className="searchUsername">{searchResult.username}</p>
        </div>
         
        
        </div>
        </Link>
        </li>    )


}