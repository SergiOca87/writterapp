import React, { useContext, useState, useEffect, useRef } from "react";
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

const StyledTextDisplay = styled.div`
    min-height: 30vh;
    height: 50%;
    width: 100%;
    padding: 6rem 8rem;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    &:focus {
        outline: none;
    }
    background-color: rgba(255, 255, 255, 0.9);

    position: absolute;
    top: 0;
    left: 0;
`;

const StyledForm = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 110rem;
    position: relative;
`;

export default function TextArea() {
    const [text, setText] = useState("");
    // const [selectedText, setSelectedText] = useState("");
    const { options, setOptions } = useContext(OptionsContext);
    // useEffect(() => {
    //     console.log(document.getSelection());
    // });

    const textArea = useRef(null);

    //TODO: This may not be needed after all.
    const handleMouseUp = () => {
        if (window.getSelection().toString().length > 0) {
            var span = document.createElement("span");
            span.style.fontWeight = "bold";
            var sel = window.getSelection();
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };

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
                    // fontWeight: `${options.fontWeight}`,
                    textDecoration: `${options.textDecoration}`,
                }}
                ref={textArea}
                // onMouseUp={getSelectedText}
            />
            <StyledTextDisplay onMouseUp={handleMouseUp}>
                {text}
            </StyledTextDisplay>
        </StyledForm>
    );
}
