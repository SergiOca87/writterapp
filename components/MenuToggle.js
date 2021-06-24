import React, { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import OptionsForm from "../components/OptionsForm";
import BackgroundSwitcher from "../components/BackgroundSwitcher";

const StyledDrawerWrap = styled.div`
    display: flex;
`;

const StyledMenuToggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.4);
    font-size: 2rem;
    margin-right: 0.5rem;
    background-color: rgb(211 211 211 / 40%);
    border: none;
    transition: all 600ms;

    &:hover {
        color: #000;
    }
`;

const StyledDrawer = styled.div`
    height: 100%;
    width: 0;
    transition: all 600ms;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.9);

    &.open {
        width: 30rem;

        .inner-content {
            opacity: 1;
            transition: opacity 300ms;
            transition-delay: 600ms;
        }
    }
`;

const StyledDrawerContent = styled.div`
    opacity: 0;
    padding: 4rem 2rem;
`;

export default function MenuToggle({ options, setOptions }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    return (
        <StyledDrawerWrap>
            <StyledMenuToggle onClick={toggleMenu}>
                {isOpen ? <MdClose /> : <BiMenu />}
            </StyledMenuToggle>
            <StyledDrawer className={isOpen ? "open" : "closed"}>
                <StyledDrawerContent className="inner-content">
                    <OptionsForm options={options} setOptions={setOptions} />
                    <BackgroundSwitcher setOptions={setOptions} />
                </StyledDrawerContent>
            </StyledDrawer>
        </StyledDrawerWrap>
    );
}
