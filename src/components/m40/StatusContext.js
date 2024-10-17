import { createContext, useContext, useState } from "react";

const StatusContext = createContext()


export const StatusContextProvider = ({ children, status }) => {
    const currentStatus = () => status
    return (
        <StatusContext.Provider value={{ currentStatus }}>{children}</StatusContext.Provider>
    )
}

export const useTodoStatus = () => useContext(StatusContext)