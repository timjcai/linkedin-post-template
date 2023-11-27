"use client";
import React, { FC } from "react";
import styled from "styled-components";

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
type AvatarType = {
    profilePicture: string;
    firstName: string;
    lastName: string;
    job: string;
};

export const AvatarCard: FC<AvatarType> = ({
    profilePicture,
    firstName,
    lastName,
    job,
}) => {
    return (
        <StyledProfile>
            <img src={profilePicture}></img>
            <TextOverlay>
                <TextOverlayHeading>
                    {firstName} {lastName}
                </TextOverlayHeading>
                <TextOverlayParagraph>{job}</TextOverlayParagraph>
            </TextOverlay>
        </StyledProfile>
    );
};

type OverlayProps = {
    $fontcolor?: string;
};

export const TextOverlay = styled.div<OverlayProps>`
    display: flex;
    flex-direction: column;
    text-align: left;
    position: absolute;
    color: ${(props) => props.$fontcolor};
    bottom: 3px;
    left: 30px;
    margin-bottom: 10px;
`;

export const TextOverlayHeading = styled.h2`
    font-size: 32px;
`;

export const TextOverlayParagraph = styled.p`
    font-size: 16px;
`;

export const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 16px;
    position: relative;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.39);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    width: 500px;
    height: 500px;
    left: 1em;
    overlay: fill;
    overflow: hidden;
`;
