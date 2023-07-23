import { createContext, useState } from "react";

export const LoadingContext = createContext({});

export default function LoadingProvider({ Children }) {
    const [loading, setLoading] = useState(false);
    
    return (
        <LoadingContext.Provider value={{
            loading,
            setLoading
        }}>
            {Children}
        </LoadingContext.Provider>
    )
}