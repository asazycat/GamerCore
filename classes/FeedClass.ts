
import { IFeed, IComments, IFeedPage } from "../interfaces/interfaces"

export class FeedC implements IFeed {
    Feed_Id: string;
    user: string;
    post_title: string;
    post_content: string;
    votes: string[];
    comments: IComments[];
    date: string;
    media_type: string;

    constructor(Feed_Id: string, user: string, post_title: string, post_content: string, votes: string[], comments: IComments[], date: string, media_type: string) {
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

export class FeedPageC implements IFeedPage {
    user: string;
    post_title: string;
    post_content: string;
    votes: string[];
    comments: IComments[];
    date: string;
    media_type: string;

    constructor(user: string, post_title: string, post_content: string, votes: string[], comments: IComments[], date: string, media_type: string) {
        this.user = user;
        this.post_title = post_title;
        this.post_content = post_content;
        this.votes = votes;
        this.comments = comments;
        this.date = date;
        this.media_type = media_type;
    }
}



export class Comment implements IComments {
    comment_id: number
    commentText: string
    date:string
    commentVotes:number

    constructor(comment_id:number,commentText:string,date:string, commentVotes:number) {
        this.comment_id = comment_id;
        this.commentText =commentText;
        this.date = date;
        this.commentVotes = commentVotes;
    }
}


export class CommentsC  {
    comments: IComments[];
    constructor(comments: IComments[]) {
        this.comments = comments
    }
    

    newComment(comment_id:number,commentText:string,date:string, commentVotes:number) {
        const c = new Comment(comment_id,commentText,date, commentVotes)
        this.comments.push(c);
        return c;
    }

    get CommentLength() {
        return this.comments.length
    }

}