"use client";
import React, { FC } from "react";
import styled from "styled-components";

export type LogoProps = { href: string };

export const CircleLogo: FC<LogoProps> = ({ href }) => {
    return (
        <Circle>
            <img src={href}></img>
        </Circle>
    );
};

const Circle = styled.div`
    height: 160px;
    width: 160px;
    border-radius: 100%;
    border: 5px solid black;
    position: absolute;
    right: 180px;
    bottom: 400px;
    overflow: hidden;
`;
