// useAppContext.js
import React, { createContext, useContext, useState } from 'react';

const UseAppContext = createContext();

export const AppProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);

    const addApplication = (newApplication) => {
        setApplications((prevApplications) => [
            ...prevApplications,
            { ...newApplication, id: prevApplications.length + 1, timestamp: new Date() },
        ]);
    };

    const removeApplication = (id) => {
        setApplications((prevApplications) => prevApplications.filter((app) => app.id !== id));
    };

    return (
        <UseAppContext.Provider value={{ applications, addApplication, removeApplication }}>
            {children}
        </UseAppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(UseAppContext);
};
