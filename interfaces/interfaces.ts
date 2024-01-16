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

export interface IFeed  {
    Feed_Id: string,
    user: string,
    post_title: string,
    post_content: string,
    votes: string[],
    comments: IComments[],
    date: string,
    media_type: string;
}


export interface IProfile {
    username: string,
    img_url: string
}


export interface IUsers {
    user_id: string,
    username: string ,
    img_url: string,
    bio: string,
    first_name: string,
    last_name: string,
    email: string,
    followers: string[],
    following: string[]
  
}