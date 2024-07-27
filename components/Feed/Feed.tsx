import { useEffect, useState, useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import EachFeed from "./EachFeed"
import {sortByMap, filterByMap} from "../../util/util"
import {FeedC} from "../../classes/FeedClass"
import { Link } from "react-router-dom"
import {IFeed} from '../../interfaces/interfaces'
import {getFeed} from '../../util/asyncFunctions'


export default function Feed () {
  
    const {loginInitials} = useContext(LoginContext)
    const [selectedSortBy, setselectedSortBy] = useState("date")
    const [selectedFilterBy, setselectedFilterBy] = useState("")
const [feed, setFeed] = useState<IFeed[]>([])

    useEffect(()=> {
        (async () => 
            {
            const snapshot = await getFeed()
            const docs = snapshot.docs.map(doc => 
                {
                const info = doc.data()
                const EachFeed = new FeedC(doc.id,info.user,info.post_title,info.post_content,info.votes,info.comments,info.date,info.media_type)
                return EachFeed
                })
            setFeed(docs)
            }) ()
        
        },[selectedFilterBy])
      
      return (
        <>
        <div className="format">
            <div className="selectBoxes">
                <div className="sortBy">
                    <label>
                        Sort By:
                            <select name="sortBy" value={selectedSortBy} onChange={e=> setselectedSortBy(e.target.value)}>
                                <option value="date" >Date</option>
                                <option value="popularity" >Popularity</option>
                                <option value="commentAmount" >Most Commented</option>  
                            </select>
                    </label>
                </div>

                <div className="filter">
                    <label>
                        Filter:
                            <select name="filter" value={selectedFilterBy} onChange={e=> setselectedFilterBy(e.target.value)}>
                                <option value="" ></option>
                                <option value="following">Following</option>
                                <option value="voted">Upvoted</option>
                            </select>
                    </label>
                    <label>
                    <Link to="/post"><button className="share" >Share</button></Link>
                    </label>
                </div>
        </div>
        
            <div className="feedList">
                {
               filterByMap(sortByMap(feed, selectedSortBy), selectedFilterBy, loginInitials.id).map((eachFeed:IFeed) => {return <EachFeed eachFeed={eachFeed} key={eachFeed.Feed_Id}/>})
                }
            </div>
        </div>
         </>


    )}
    