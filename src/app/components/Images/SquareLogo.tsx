import React, { FC } from "react";
import styled from "styled-components";
import { LogoProps } from ".";

export const SquareLogo: FC<LogoProps> = ({ href }) => {
    return (
        <SquareClippingMask>
            <img src={href} />
        </SquareClippingMask>
    );
};

const SquareClippingMask = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 16px;
    overflow: hidden;
`;
