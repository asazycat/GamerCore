import db from "../src/firebase"
import { getDocs, collection, doc, getDoc } from "firebase/firestore"


export async function getFeed() {
    const colRef = collection(db, 'feed')

            const snapshot = await getDocs(colRef)

            return snapshot
}


export default async function getFeedPage(postId:string) {
    
    const docRef = doc(db, 'feed', postId)

    const document = await getDoc(docRef)
              
        return document
    }
    





// getDoc(docRef).then((doc) => {
              
    
//     if (doc.exists()) {

//         const data  = doc.data()
       
//        setFeedPage(
//         {
//             user: data.user,
//             post_title: data.post_title,
//             post_content:data.post_content,
//             votes: data.votes,
//             comments: data.comments,
//             media_type:data.media_type,
//             date: data.date

//         }
//        )
       
//       } else {console.log("No such document!")}