
import ListOfStreamsLive from "./ListOfStreamsLive"


export default function Stream () {
 

    return (
        <>
        <div className="LiveStreamer">
            <ListOfStreamsLive/>
        </div>
        <a href='https://id.twitch.tv/oauth2/authorize?response_type=token&force_verify=true&client_id=oxbpd3lkxy28snpcdhc6pii11tp87v&redirect_uri=http://localhost:5173/Stream&scope=user%3Aread%3Afollows'>Connect with Twitch</a>
        </>
    )
}