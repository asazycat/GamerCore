import { useState } from "react"
import {discussionPosts} from "../dataTemp/data"
import EachFeed from "./EachFeed"
import {sortByMap} from "../util/util"

import { Link } from "react-router-dom"

export default function Feed () {

    const [selectedSortBy, setselectedSortBy] = useState("")
    
    return (
        <>
        <div className="postButton"><label><Link to="/post"><button className="share" >Share</button></Link></label></div>
        <div className="format">

            <div className="selectBoxes">
            <div className="sortBy">
            <label>
                Sort By:
                <select name="sortBy" value={selectedSortBy} onChange={e=> setselectedSortBy(e.target.value)}>
                <option value="" ></option>
                    <option value="popularity" >Popularity</option>
                    <option value="commentAmount" >Most Commented</option>  
                </select>
            </label>
            </div>

            <div className="filter">
            <label>
                Filter:
                <select name="filter" defaultValue="">
                    <option value="" ></option>
                    <option value="following" >Following</option>
                    <option value="voted" >Upvoted</option>
                    <option value="voted" >Video/Img</option>
                    <option value="voted" >Discussion</option>
                </select>
            </label>
            </div>
            </div>
            

             

            <div className="feedList">
            {
            sortByMap(discussionPosts, selectedSortBy).map((eachFeed:{
                discussion_id: number,
                user: string,
                post_title: string,
                post_content: string,
                votes: number,
                comment_amount: number,
                date: string
            }) => {return <EachFeed eachFeed={eachFeed} key={eachFeed.discussion_id}/>
            } )}
            </div>
         </div>
         </>
    )}
    