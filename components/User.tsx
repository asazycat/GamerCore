import { useParams } from "react-router-dom"

export default function User () {

    const {user_id} = useParams()
    


    return (<h1>{user_id}</h1>)
}