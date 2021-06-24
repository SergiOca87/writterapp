import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import bg1 from "../public/1.jpg";
import bg2 from "../public/2.jpg";
import bg3 from "../public/3.jpg";
import bg4 from "../public/4.jpg";
import bg5 from "../public/5.jpg";

const backgrounds = [bg1, bg2, bg3, bg4, bg5];

const StyledThumbnailsWrap = styled.div`
    display: flex;

    img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
    }
`;

export default function BackgroundSwitcher({ setOptions }) {
    const [backgroundSrc, setBackgroundSrc] = useState(bg1);

    const backgroundChange = (src) => {
        return setOptions({
            background: src,
        });
    };

    return (
        <>
            <p>Select a Background</p>
            <StyledThumbnailsWrap>
                {backgrounds.map((background, idx) => {
                    return (
                        <Image
                            key={idx}
                            src={background.src}
                            width={50}
                            height={50}
                            data-src={background.src}
                            onClick={(e) => backgroundChange(background.src)}
                        />
                    );
                })}
            </StyledThumbnailsWrap>
        </>
    );
}
