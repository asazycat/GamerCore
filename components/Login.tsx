
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
import { LoginContext } from '../context/LoginContext';
import { useContext, useState, useEffect, Dispatch, SetStateAction,  } from 'react';
import gaming from '../images/epicImg.jpg'


export default function Login (props: {login: boolean, setLogin: Dispatch<SetStateAction<boolean>>}) {

    const {loginInitials, setLoginInitials} = useContext(LoginContext)
        const {setLogin} = props
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        
        const auth = getAuth()
       
        function demoInitials() {
            console.log('demo INitials')
            setEmail('demoaccount@demo.co.uk')
            setPassword('demoAccount')
        }
        
        
    useEffect(()=> {
      
        onAuthStateChanged(auth, (user) => {
            if (user) {
              loginInitials.id = user.uid
             setLogin(true)
            } else {
           
           
             setLogin(false)
            }
        })      

    },[auth, loginInitials, setLogin])
   
        
       

       



        const handleSubmit = (e: { preventDefault: () => void; }) => {

           e.preventDefault()
      
        
           signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            loginInitials.id = user.uid
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} + ${errorMessage}`)
          });
            
            loginInitials.email = email
            loginInitials.password = password
            setLoginInitials(loginInitials)

            
        }

       return (
         <div className='bg-apply'>
            <img src={`${gaming} `} className="loginImg" alt="https://wallpapercave.com/all-video-game-characters-wallpaper"/>
        <div className="login">
           
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                </label>
                <input  onChange={(e) => {setEmail(e.target.value)}}/> 

                <label>
                    Password
                </label>

                
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}/> 
                <label><button type="submit" className='loginButton'>Login</button></label>
                <label><button onClick={demoInitials} className="demoButton" >Demo Account</button></label>
            </form>
        </div>
        </div>
       )

}