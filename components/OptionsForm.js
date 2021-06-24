import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styled from "styled-components";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";

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

export default function OptionsForm({ options, setOptions }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );

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
                                className="active"
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
                            <Button variant="outline-secondary">
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
                        <Button className="round" variant="outline-secondary">
                            <FaBold />
                        </Button>{" "}
                        <Button className="round" variant="outline-secondary">
                            <FaItalic />
                        </Button>{" "}
                        <Button className="round" variant="outline-secondary">
                            <FaUnderline />
                        </Button>{" "}
                    </StyledButtonGroup>
                </Form.Group>
            </Form>
        </StyledFormWrap>
    );
}
