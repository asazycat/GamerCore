
import { IFeed } from "../../interfaces/interfaces"
import { IComments } from "../../interfaces/interfaces";
class FeedC implements IFeed {
     Feed_Id: string;
     user: string;
     post_title: string;
     post_content: string;
     votes: string[];
     comments: IComments[];
     date: string;
     media_type: string;

    constructor(Feed_Id: string, user:string, post_title:string,post_content:string, votes:string[], comments:IComments[], date:string, media_type:string) {
        this.Feed_Id = Feed_Id;
        this.user = user;
        this.post_title = post_title;
        this.post_content = post_content;
        this.votes = votes;
        this.comments = comments;
        this.date = date
        this.media_type = media_type;
    }
}

export default FeedC