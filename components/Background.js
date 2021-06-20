import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { css } from "styled-components";

const StyledBackgroundWrap = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    left: 0;
    top: 0;
`;

const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
    // background-size: cover;
    // background-position: center;
`;

export default function Background({ active }) {
    const setBg = () => {
        console.log("click");
    };

    return (
        <>
            <StyledBackgroundWrap>
                <Image
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    src={active}
                    alt="Background Image"
                />
            </StyledBackgroundWrap>
        </>
    );
}
