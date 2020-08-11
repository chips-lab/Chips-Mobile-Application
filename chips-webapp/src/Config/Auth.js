import React, {useEffect, useState} from "react";
import Fire from  "./Fire";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

const [currentUser, setCurrentUser] = useState(null);

useEffect( () =>{ 

Fire.auth.onAuthStateChanged(setCurrentUser);

}, []);

return (

    <AuthContext.Provider 
    value={{  currentUser  }}
    >
{  children }

    </AuthContext.Provider>

);




};