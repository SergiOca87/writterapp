import React, { useContext, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import OptionsContext from "../context/OptionsContext";

const StyledTextArea = styled.textarea`
    min-height: 80vh;
    height: 100%;
    width: 100%;
    padding: 6rem 8rem;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    &:focus {
        outline: none;
    }
    background-color: rgba(255, 255, 255, 0.9);
`;

const StyledForm = styled.form`
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 110rem;
`;

export default function TextArea() {
    const [text, setText] = useState("");
    // const [selectedText, setSelectedText] = useState("");

    const { options } = useContext(OptionsContext);

    //TODO: Trying to get the highlighted text, no window in Next.js
    // const getSelectedText = () => {
    //     const selection = window.getSelection();
    //     console.log(selection);
    // };

    // useEffect(() => {
    //     hasWindow();
    //     return () => {
    //         hasWindow();
    //     };
    // }, []);

    // const hasWindow = () => {
    //     return typeof window === "object";
    //     console.log("has window?");
    // };

    // if (!hasWindow()) {
    //     // const selection = window.getSelection();
    //     // console.log(selection);
    //     console.log("No window");
    // }

    return (
        <StyledForm>
            <StyledTextArea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                style={{
                    fontSize: `${options.fontSize}px`,
                    fontFamily: `${options.fontFamily}`,
                    fontStyle: `${options.fontStyle}`,
                    fontWeight: `${options.fontWeight}`,
                    textDecoration: `${options.textDecoration}`,
                }}
                // onMouseUp={getSelectedText}
            />
        </StyledForm>
    );
}
