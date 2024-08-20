
import "./lfg.css"
export default function EachLFG(props: {
    eachLFG:{
    LFG_id:string,
    LFG_Poster:string,
    LFG_title:string,
    Platform: string,
    Game: string,
    LFG_description: string,
    LFG_tags: string[]
    },
}) {
     const {eachLFG} = props


    return (
        <div className="eachLFG">
        <h1>{eachLFG.LFG_title} ({eachLFG.Game})</h1>
        <p>{eachLFG.LFG_description}</p>
        <p>{eachLFG.Platform}</p>
        <p>{eachLFG.LFG_Poster}</p>
        <button className="share">Join LFG</button>
        </div>
    )
}