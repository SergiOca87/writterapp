import { useState, createContext } from "react";
import bg1 from "../public/1.jpg";

const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
    const [options, setOptions] = useState({
        background: bg1.src,
        fontFamily: "Lato",
        fontStyle: "initial",
        fontWeight: "initial",
        textDecoration: "none",
        fontSize: "21",
    });
    return (
        <OptionsContext.Provider value={{ options, setOptions }}>
            {children}
        </OptionsContext.Provider>
    );
};

export default OptionsContext;
