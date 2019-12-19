import React from "react";
import styled from 'styled-components'

const ImageDescription = styled.p`

`;

export default function Description(props){
    return (
        <ImageDescription>Description: {props.data}</ImageDescription>
    )
};
