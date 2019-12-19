import React from "react";
import styled from 'styled-components'

const ImageTitle = styled.p`

`;

export default function Title(props){
    return (
        <ImageTitle>Title: {props.data}</ImageTitle>
    )
};
