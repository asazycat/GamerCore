export function sortByMap (arr1: {
                Feed_Id: string,
                user: string,
                post_title: string,
                post_content: string,
                votes: number,
                comment_amount: number,
                date:  string,
                media_type:string
            } [], 
                sortBy: string) 
    {
        
        
      const newArray = [...arr1]
    
    if (sortBy === "popularity")
    {
        newArray.sort((a,b)=> b.votes - a.votes)
        
    
            
    }
    else if (sortBy === "commentAmount")
    {
        newArray.sort((a,b)=> b.comment_amount - a.comment_amount)
    }
    else {
        return arr1
    }
    return newArray
    }



    export function findUser (arr1: {
        user_id: string,
        username: string ,
        img_url: string,
        bio: string,
        first_name: string,
        last_name: string,
        email: string,
        followers: number[],
        following: number[]
        password:string
    } [], searchTerm:string) {
            if (searchTerm === '') {return []}
            const array = [...arr1]
              return array.filter((eachUser) => {
                const regex = `^${searchTerm}`
                const newRegex = new RegExp (regex, 'gmi')
              
                if (newRegex.test(eachUser.username)){
                    console.log(eachUser)
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
    followers: number[],
    following: number[]
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
    followers: number[],
    following: number[]
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
        followers: number[],
        following: number[] } [], username: string) {
            const userObj =  arr1.filter((user) => user.username === username)
            return userObj[0].user_id
    } 


