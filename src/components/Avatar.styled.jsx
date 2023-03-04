import styled from "@emotion/styled";
import { CardMedia, Box } from '@mui/material';

export const Image = styled(Box)`
    position: absolute;
    top: 178px;
    left: 150px;
    width: 80px;
    height: 80px;
    display: inline-flex;
    object-fit: cover;
    align-items: center;
    justify-content: center;
`


export const Circle = styled(Box)`
    position: absolute;
    z-index: 100;
    width: 80px;
    height: 80px;
    background-color: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
`

export const FotoContainer = styled(Box)`
    position: absolute;
    width: 62px;
    height: 62px;
    z-index: 140;
    border-radius: 50%;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

`

export const Foto = styled(CardMedia)`
    position: absolute;
    width: 62px;
    height: 62px;
    z-index: 150;
    object-fit: cover;
    border-radius: 50%;
`