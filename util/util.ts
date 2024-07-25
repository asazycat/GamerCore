import { IComments } from "../interfaces/interfaces"
// import firebase from "../src/firebase";
// import db from "../src/firebase"

export function filterByMap (arr1: {
                Feed_Id: string,
                user: string,
                post_title: string,
                post_content: string,
                votes: string[],
                comments: IComments[],
                date:  string,
                 media_type:string
            } [],
                filterBy:string, user_id:string)
    {
       

        switch (filterBy) {
         
            case 'voted':
                return  arr1.filter(element=> element.votes.includes(user_id))
                break;
            
                
            case 'following':
                arr1.filter(element=> element.votes.includes)
                break;
            default:
                return arr1
        }
        return []
    }







export function sortByMap (arr1: {
                Feed_Id: string,
                user: string,
                post_title: string,
                post_content: string,
                votes: string[],
                comments: IComments[],
                date:  string,
                media_type:string
            } [], 
                sortBy: string) 
    {
        
       
      const newArray = [...arr1]
  
    if (sortBy === "popularity")
    {
        newArray.sort((a,b)=> b.votes.length - a.votes.length)
        
    
            
    }
    else if (sortBy === "commentAmount")
    {
        newArray.sort((a,b)=> b.comments.length - a.comments.length)
    }
    else {
        return arr1
    }
    return newArray
    }



    export function findUser  (arr1: {
        user_id: string,
        username: string ,
        img_url: string,
        bio: string,
        first_name: string,
        last_name: string,
        email: string,
        followers: string[],
        following: string[]
        
    } [], searchTerm:string) {
            if (searchTerm === '') {return []}
            const array = [...arr1]
              return array.filter((eachUser) => {
                const regex = `^${searchTerm}`
                const newRegex = new RegExp (regex, 'gmi')
              
                if (newRegex.test(eachUser.username)){
                   
                    return eachUser
                }
                else {
                    console.log('not there')
                }
               })

            
        }




export function checkPassword (arr1: {  user_id: string,
    username: string ,
    img_url: string,
    bio: string,
    first_name: string,
    last_name: string,
    email: string,
    followers: string[],
    following: string[]
    password:string}[],obj: {username: string, password: string}) {
      console.log(arr1, obj)
       for (let i =0; i < arr1.length -1; i++)
       {
        if(arr1[i].username === obj.username && arr1[i].password === obj.password)
        {
            return true
        }
       }
       
}



export function getUserDetails ( arr1: {
    user_id: string,
    username: string ,
    img_url: string,
    bio: string,
    first_name: string,
    last_name: string,
    email: string,
    followers: string[],
    following: string[]
    password:string
} [], username: string) {

        const userObj =  arr1.filter((user) => user.username === username)

        return userObj[0]
    }



    export function getIdByUsername(arr1: {
        user_id: string,
        username: string ,
        img_url: string,
        bio: string,
        first_name: string,
        last_name: string,
        email: string,
        followers: string[],
        following: string[] } [], username: string) {
            const userObj =  arr1.filter((user) => user.username === username)
            return userObj[0].user_id
    } 


export function platformFilter (arr1: {
    LFG_id:string,
    LFG_Poster:string,
    LFG_title:string,
    Platform: string,
    Game: string,
    LFG_description: string,
    LFG_tags: string[]
}[], platform:string) {
    if (platform === "") {return arr1}
    return arr1.filter((element)=> element.Platform === platform)
}