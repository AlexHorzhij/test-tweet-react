import styled from "@emotion/styled";

export const Box = styled('div')`
position: relative;
     /* width: 80px; */
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Line = styled('div')`
    /* position: relative; */
    width: 380px;
    height: 8px;
    left: 0px;
    top: 50%;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
` 
export const Image = styled('div')`
    position: absolute;
    /* left: 50%;
    right:50%; */
    /* top: 28px;  */
    z-index: 100;
    width: 80px;
    height: 80px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
`