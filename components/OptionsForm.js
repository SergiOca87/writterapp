import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styled from "styled-components";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import OptionsContext from "../context/OptionsContext";

const StyledFormWrap = styled.div`
    option {
        font-size: 1.6rem;
    }
`;

const StyledButtonGroup = styled.div`
    display: flex;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        background-color: rgb(211 211 211 / 40%);
        border: none;
    }
`;

export default function OptionsForm() {
    const { options, setOptions } = useContext(OptionsContext);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );

    const handleStyleButtonClick = (key, value) => {
        options[key] === value
            ? setOptions({
                  ...options,
                  [key]: "initial",
              })
            : setOptions({
                  ...options,
                  [key]: value,
              });
    };

    return (
        <StyledFormWrap>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Font Family</Form.Label>
                    <StyledButtonGroup>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="button-tooltip">Lato</Tooltip>
                            }
                        >
                            <Button
                                variant="outline-secondary"
                                className={
                                    options.fontFamily === "Lato"
                                        ? "active"
                                        : ""
                                }
                                onClick={(e) =>
                                    setOptions({
                                        ...options,
                                        fontFamily: "Lato",
                                    })
                                }
                            >
                                <span className="lato">Aa</span>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="button-tooltip">Open Sans</Tooltip>
                            }
                        >
                            <Button
                                variant="outline-secondary"
                                className={
                                    options.fontFamily === "OpenSans"
                                        ? "active"
                                        : ""
                                }
                                onClick={(e) =>
                                    setOptions({
                                        ...options,
                                        fontFamily: "OpenSans",
                                    })
                                }
                            >
                                <span className="open-sans">Aa</span>
                            </Button>
                        </OverlayTrigger>
                    </StyledButtonGroup>
                </Form.Group>

                <Form.Group controlId="formBasicRange">
                    <Form.Label>Font Size</Form.Label>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip id="button-tooltip">
                                {`${options.fontSize}px`}
                            </Tooltip>
                        }
                    >
                        <Form.Control
                            type="range"
                            min="12"
                            max="60"
                            onChange={(e) =>
                                setOptions({
                                    ...options,
                                    fontSize: e.target.value,
                                })
                            }
                        />
                    </OverlayTrigger>
                </Form.Group>

                <Form.Group controlId="formBasicButtons">
                    <Form.Label>Style</Form.Label>
                    <StyledButtonGroup>
                        <Button
                            variant="outline-secondary"
                            className={
                                options.fontWeight === "bold" ? "active" : ""
                            }
                            onClick={(e) =>
                                handleStyleButtonClick("fontWeight", "bold")
                            }
                        >
                            <FaBold />
                        </Button>{" "}
                        <Button
                            variant="outline-secondary"
                            className={
                                options.fontStyle === "italic" ? "active" : ""
                            }
                            onClick={(e) =>
                                handleStyleButtonClick("fontStyle", "italic")
                            }
                        >
                            <FaItalic />
                        </Button>{" "}
                        <Button
                            variant="outline-secondary"
                            className={
                                options.textDecoration === "underline"
                                    ? "active"
                                    : ""
                            }
                            onClick={(e) =>
                                handleStyleButtonClick(
                                    "textDecoration",
                                    "underline"
                                )
                            }
                        >
                            <FaUnderline />
                        </Button>{" "}
                    </StyledButtonGroup>
                </Form.Group>
            </Form>
        </StyledFormWrap>
    );
}
