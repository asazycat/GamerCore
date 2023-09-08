

import { LoginContext } from '../context/LoginContext';
import { useContext, useState } from 'react';
import { checkPassword } from '../util/util';
import { LoginProfiles } from '../dataTemp/data';
 
export default function Login (props) {

        const {user, setUser} = useContext(LoginContext)
        
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
       

        const {setLogin} = props



        const handleSubmit = (e: { preventDefault: () => void; }) => {

            user.username = username
            user.password = password

            if (checkPassword(LoginProfiles, user)) {
                setUser(user)
                setLogin(true)
            }
            else {
                console.log("password doesn't match" )
            }
            e.preventDefault()
           
        }

       return (
        <div className="login">
            <img src="../images/gamerCore.jpg" className="gamerCore"/>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                </label>
                <input  onChange={(e) => {setUsername(e.target.value)}}/> 

                <label>
                    Password
                </label>

                
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}/> 
                <label><button type="submit">Login</button></label>
            </form>
        </div>
       )

}