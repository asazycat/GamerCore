import { Link } from "react-router-dom"
import { IUsers } from "../../interfaces/interfaces"
import "./search.css";
export default function EachSearchResult(props: {searchResult: IUsers}) {
    const {searchResult} = props
    return (
        <li>
             <Link to ={`user/${searchResult.user_id}`} >
        <div className="eachSearch">
       

         <div className="top">
        <img src={searchResult.img_url} alt={searchResult.username} height="50" width="50" className="searchImg"/>
        <p className="searchUsername">{searchResult.username}</p>
        </div>
         
        
        </div>
        </Link>
        </li>    )


}