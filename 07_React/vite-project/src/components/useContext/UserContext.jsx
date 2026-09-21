import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            name: "최지원",
            role: "관리자",
        })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}