import React from "react";
import styled from 'styled-components'

const DateWrapper = styled.div`
  width: 30%;
`;

const Date = styled.h3`

`

export default function (props) {
    return (
        <DateWrapper>
            <Date>Picture Of The Day for: {props.date}</Date>
        </DateWrapper>
    )
}