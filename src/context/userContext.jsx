import {useState, useContext, createContext, useMemo} from "react";

const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState("Valentino Buitrago");

    const value = useMemo(() => {
        return({
            user,
            setUser
        })
    }, [user])

    return <UserContext.Provider value={value} {...props}/>
}

export function useUsuario() {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("Error en el contexto del usuario");
    }

    return context;
} 