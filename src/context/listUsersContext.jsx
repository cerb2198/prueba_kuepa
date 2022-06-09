import { useState, useContext, createContext, useMemo } from "react";

const ListUsersContext = createContext();

export function ListUsersProvider(props) {
    const [listUsers, setListUsers] = useState([
        "Valentino Buitrago",
        "Victor Santos",
        "Romalia Camargo",
        "Fidelia Ochoa"
    ]);

    const value = useMemo(() => {
        return ({listUsers})
    }, [listUsers])

    return <ListUsersContext.Provider value={value} {...props}/>
}

export function useListUsers() {
    const context = useContext(ListUsersContext);

    if(!context) {
        throw new Error("Error en el contexto del usuario");
    }

    return context;
}