import React from 'react';
import {
    InfoContainer,InfoWrapper, InfoRow, Col1, TextWrapper,
    TopLine, SectionHeading, Subtitle, BtnWrap, ModalBtn,
     Col2, ImgWrap, Img
} from './InfoElements';
import temp1 from '../../assets/images/temp1.jpg'

const InfoSection = ({id, imgStart, topLine, headline, desc, img, alt, displayBtn, toggleModal}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Col1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <SectionHeading>{headline}</SectionHeading>
                                <Subtitle>{desc}</Subtitle>
                                <BtnWrap displayBtn={displayBtn}>
                                    <ModalBtn displayBtn={displayBtn} onClick={toggleModal}>Learn More</ModalBtn>
                                </BtnWrap>
                                
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={temp1} alt={alt} />
                            </ImgWrap>
                        </Col2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
