import db from "../src/firebase"
import { getDocs, collection } from "firebase/firestore"


export async function getFeed() {
    const colRef = collection(db, 'feed')

            const snapshot = await getDocs(colRef)

            return snapshot
}