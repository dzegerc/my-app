import React, { createContext, useState} from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}
const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer};