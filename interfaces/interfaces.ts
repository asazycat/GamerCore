export interface IComments {
   comment_id: number,
   commentText: string,
   date:string
   commentVotes:number

}


export interface IFeedPage  {
 
    user: string,
    post_title: string,
    post_content: string,
    votes: string[],
    comments: IComments[],
    date: string,
    media_type: string;
}