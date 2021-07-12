import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { FaMusic } from "react-icons/fa";
import OptionsContext from "../context/OptionsContext";
import Button from "react-bootstrap/Button";
import music1 from "../public/mixkit-serene-view-443.mp3";
import music2 from "../public/mixkit-forest-treasure-138.mp3";

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

export default function MusicSwitcher() {
    // const { options, setOptions } = useContext(OptionsContext);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [music, setMusic] = useState([]);

    useEffect(() => {
        setMusic([new Audio(music1), new Audio(music2)]);
    }, []);

    const stopSong = () => {
        currentSong.pause();
        currentSong.currentTime = 0;
    };

    useEffect(() => {
        if (currentSong) {
            currentSong.play();
        } else if (isPlaying === false && currentSong) {
            stopSong();
        }
    }, [currentSong]);

    const handleSongButtonClick = (song) => {
        if (song === currentSong) {
            setIsPlaying(false);
            stopSong();
            setCurrentSong(null);
        } else if (currentSong) {
            stopSong();
            setCurrentSong(song);
        } else {
            setCurrentSong(song);
        }
    };

    return (
        <>
            <p>Select a Song</p>
            <StyledButtonGroup>
                {music.map((song, idx) => {
                    return (
                        <Button
                            key={idx}
                            variant="outline-secondary"
                            className={currentSong === song ? "active" : ""}
                            onClick={() => handleSongButtonClick(song)}
                        >
                            <FaMusic />
                            &nbsp;<span>{idx + 1}</span>
                        </Button>
                    );
                })}
            </StyledButtonGroup>
        </>
    );
}
