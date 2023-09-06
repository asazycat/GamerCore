export function sortByMap (arr1: {
                discussion_id: number,
                user: string,
                post_title: string,
                post_content: string,
                votes: number,
                comment_amount: number,
                date: string} [], 
                sortBy: string) 
    {
        
        
      const newArray = [...arr1]
      console.log(sortBy)
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