import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MenuToggle from "../components/MenuToggle";
import TextArea from "../components/TextArea";
import Background from "../components/Background";
import styled from "styled-components";
import bg1 from "../public/1.jpg";

const StyledMain = styled.main`
    padding: 8rem 2rem;
    max-width: 160rem;
    margin: 0 auto;
    display: flex;
`;

export default function Home() {
    const [options, setOptions] = useState({
        background: bg1,
    });
    return (
        <div>
            <Head>
                <title>ZenWritter</title>
                <meta name="description" content="Online writting tool" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <StyledMain>
                <MenuToggle setOptions={setOptions} />
                <Background active={options.background} />
                <TextArea />
            </StyledMain>
        </div>
    );
}
