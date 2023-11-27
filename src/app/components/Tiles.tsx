"use client";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const Tiles: FC = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const [totalSquares, setTotalSquares] = useState<number>(
        Math.floor(windowDimensions.width / 50) *
            Math.floor(windowDimensions.height / 50)
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function createBackground() {
        let background = [];
        for (let i = 0; i < totalSquares; i++) {
            background.push(<Tile />);
        }

        return background;
    }
    console.log(Math.floor(windowDimensions.height / 50));
    console.log(Math.floor(windowDimensions.width / 50));

    return (
        <GridWrapper
            $rows={Math.floor(windowDimensions.height / 50)}
            $columns={Math.floor(windowDimensions.width / 50)}
            // $rows={Math.floor(windowDimensions.height / 50)}
            // $columns={Math.floor(windowDimensions.width / 50)}
        >
            {createBackground()}
        </GridWrapper>
    );
};

// export const Tile: FC = () => {
//     return <div className="border-2 border-white h-[50px] w-[50px] m-0"></div>;
// };

const Tile = styled.div`
    outline: 1px solid white;
`;

type GridWrapperProps = {
    $columns: number;
    $rows: number;
};

const GridWrapper = styled.div<GridWrapperProps>`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
    grid-template-rows: repeat(${(props) => props.$rows}, 1fr);
    z-index: -100;
    position: absolute;
`;
