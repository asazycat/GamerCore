import { Dispatch, SetStateAction, createContext,useState } from 'react';


export type UserContextType = {
  loginInitials: {
      id:string,
      email: string,
      password: string
    } ,
    setLoginInitials: (Dispatch<SetStateAction<{ id:string, email: string; password: string; }>>) 
}



 type LoginContextProviderType = {
children: React.ReactNode
}

export const LoginContext = createContext({} as UserContextType)

export const LoginContextProvider = ({ children }: LoginContextProviderType) => {
  
  const [loginInitials, setLoginInitials] = useState({
    id:"",
    email: "",
    password:""
  })
  
   
        
  return (
    <LoginContext.Provider value={{loginInitials, setLoginInitials}}>
      {children}
    </LoginContext.Provider>
  );
};