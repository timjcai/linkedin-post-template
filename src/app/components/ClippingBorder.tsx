"use client";
import React, { FC } from "react";
import styled from "styled-components";
import { AvatarCard } from "./Images";

export const ClippingBorder = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <ClippingBorderOutline>
                <AvatarCard
                    profilePicture="https://dldnews.com/wp-content/uploads/2021/02/Niklas-Zennstro%CC%88m-600x600-1.jpg.webp"
                    firstName="Niklas"
                    lastName="Zennström"
                    job="CEO & Founder - Skype"
                />
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
            </ClippingBorderOutline>
        </div>
    );
};

const ClippingBorderOutline = styled.div`
    display: flex;
    padding-top: 50px;
    align-items: center;
    flex-direction: column;
    height: 1000px;
    width: 1000px;
    position: absolute;
    border: 5px solid black;
`;
