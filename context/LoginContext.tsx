import { createContext,useState } from 'react';


export type UserContextType = {
    user:  any,
    setUser:any
}



 type LoginContextProviderType = {
children: React.ReactNode
}

export const LoginContext = createContext({} as UserContextType)

export const LoginContextProvider = ({ children }: LoginContextProviderType) => {
  
  const [user, setUser] = useState({})
  
   
        
  return (
    <LoginContext.Provider value={{user, setUser}}>
      {children}
    </LoginContext.Provider>
  );
};