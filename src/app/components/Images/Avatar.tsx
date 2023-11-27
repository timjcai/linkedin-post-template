import React, { FC } from "react";
import styled from "styled-components";
import { CircleLogo } from ".";

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
        <>
            <StyledProfile>
                <img src={profilePicture}></img>
                <TextOverlay>
                    <TextOverlayHeading>
                        {firstName} {lastName}
                    </TextOverlayHeading>
                    <TextOverlayParagraph>{job}</TextOverlayParagraph>
                </TextOverlay>
            </StyledProfile>
            <CircleLogo href="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/gussdktimort5f6kpzmk" />
        </>
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
    position: relative;
    margin-bottom: 100px;
`;
