import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

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

export default function TextArea({ options }) {
    const [text, setText] = useState("");

    return (
        <StyledForm>
            <StyledTextArea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                style={{ fontSize: `${options.fontSize}px` }}
            />
        </StyledForm>
    );
}
