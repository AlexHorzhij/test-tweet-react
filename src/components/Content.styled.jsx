import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

export const ContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 52px;
`
export const Title = styled(Typography)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    text-decoration: underline;
    color: #EBD8FF;
`

export const Count = styled(Typography)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
`

export const Btn = styled(Button)`
    padding: 14px 28px;
    margin-bottom: 30px;
    width: 196px;
    height: 50px;
    color: #000;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`