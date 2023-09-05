import {discussionPosts} from "../dataTemp/data"
import EachFeed from "./EachFeed"


export default function Feed () {

    
    return (
        <div className="format">

            <div className="selectBoxes">
            <div className="sortBy">
            <label>
                Sort By:
                <select name="sortBy" defaultValue="">
                    <option value="popularity" >Popularity</option>
                    <option value="dateOfupload" >Date Of Upload</option>  
                </select>
            </label>
            </div>

            <div className="filter">
            <label>
                Filter:
                <select name="filter" defaultValue="">
                    <option value="platform" >Platform</option>
                    <option value="following" >Following</option>
                </select>
            </label>
            </div>
            </div>

            <div className="feedList">{discussionPosts.map((eachFeed:{
                discussion_id: number,
                user: string,
                post_title: string,
                post_content: string,
                votes: number,
                comment_amount: number,
                date: string
            }) => {return <EachFeed eachFeed={eachFeed} />})}</div>




        </div>
    )
}