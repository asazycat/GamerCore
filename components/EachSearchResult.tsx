export default function EachSearchResult(props: {searchResult: {
    user_id: number,
    username: string,
    img_url: string,
    bio: string,
    first_name: string,
    last_name:string ,
    email: string ,
    followers_count:number,
    following_count: number,}}) {
    const {searchResult} = props
    return (
        <li>
        <div className="eachSearch">


         <div className="top">
        <img src={searchResult.img_url} alt={searchResult.username} height="75" width="75" className="searchImg"/>
        <p className="searchUsername">{searchResult.username}</p>
        </div>
        <p className="bio">{searchResult.bio}</p> 
        </div>
        
        </li>    )


}