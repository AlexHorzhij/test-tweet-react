import styled from '@emotion/styled'
import { CardMedia } from '@mui/material';

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 380px;
    border-radius: 20px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    margin-left: auto;
    margin-right: auto;
`

export const Logo = styled(CardMedia)`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
`


export const BgContainer = styled(CardMedia)`
    display: block;
    width:308px;
    height: 168px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
    background-position: center;
    background-size: cover;
    background-image: url('assets/images/DSC_0401.JPG');
`
export const Line = styled('div')`
    width: 100%;
    height: 8px;
    margin-top: 18px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
` 

