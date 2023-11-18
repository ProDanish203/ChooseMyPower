"use client"
import { useState, createContext, useContext } from "react";

const InfoContext =  createContext();

export const InfoProvider = ({children}) => {

    const [address, setAddress] = useState('');
    const [selectedDate, setSelectedDate] = useState("");

    const value = {
        address, setAddress,
        selectedDate, setSelectedDate
    }

    return (
        <InfoContext.Provider
        value={value}
        >
            {children}
        </InfoContext.Provider>
    )
}

export const useInfo = () => useContext(InfoContext);