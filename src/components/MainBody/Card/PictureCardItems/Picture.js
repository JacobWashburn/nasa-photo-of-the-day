import React from "react";
import styled from 'styled-components'
import Description from './Picture Description'
import Title from './PictureTitle'

const ImageWrapper = styled.div`
  width: 75%;
`;

const Image = styled.img`
  width: 100%;
`
export default function Picture(props) {

    return(
        <ImageWrapper>
            <Image src={props.data.url} alt={props.data.title}/>
            <Title data={props.data.title}/>
            <Description data={props.data.explanation}/>
        </ImageWrapper>
    )
}
