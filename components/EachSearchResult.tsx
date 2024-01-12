import { Link } from "react-router-dom"

export default function EachSearchResult(props: {searchResult: {
    user_id: string,
    username: string,
    img_url: string,
    bio: string,
    first_name: string,
    last_name:string ,
    email: string ,
    followers:string[],
    following: string[],}}) {
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