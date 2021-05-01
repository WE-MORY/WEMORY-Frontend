import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
// import cat from '../../assets/Images/textImg/cat2.png'
import { MAIN_COLOR } from '../../assets/Colors/Color';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import Button from '../../assets/Button/Button';

const CircleDiv = styled.div`
    position:relative;
    top: 25%;
    left: 25%;
    svg{
        stroke-dasharray: 100; /*이 값은 path의 길이와 동일합니다*/
        stroke-dashoffset: 100;
        animation: dash 1.3s linear;
        animation-fill-mode: forwards;
        
        @keyframes dash {
        0% {
            stroke-dashoffset: 100;
        }
        100% {
             stroke-dashoffset: 0;
        }
}
    }

    
`
const BtnStyle = styled.div`
    
    button {
        max-width: 160px;
        font-family: spoqa-Light;
        margin-top: 3vh;

    }
`
const Text = styled.div`
    margin-top: 5vh;
    text-align: center;
    height : 15vh;
    width : 50vw;
    font-size: 1.4rem;

    
`


const Wrapper = styled.div`
    width: 30vw;
    height: 50vh;
`

const Wrap = styled.div`
  /* margin: 5% auto; */
  width: 100vw;

`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   arrows: true
    };
    return (
      <div>
        <Wrap>
            <Slider {...settings}>
                
            <Wrapper>
                <CircleDiv>
                    <div>
                        <Text>
                            일기를 작성할<br />
                            계좌를 등록해주세요.
                            <BtnStyle>
                                <Button Text={"등록하기"} Width={"50vw"}></Button>
                            </BtnStyle>
                        </Text>
                    </div>
                </CircleDiv>
            </Wrapper>
            <Wrapper>
                
                <CircleDiv>
                <div>
                        <Text>
                            일기를 작성할<br />
                            계좌를 등록해주세요.
                            <BtnStyle>
                                <Button Text={"등록하기"} Width={"50vw"}></Button>
                            </BtnStyle>
                        </Text>
                        </div>
                    </CircleDiv>
            </Wrapper>
            <Wrapper>
            <CircleDiv>
            <div>
                    <Text>
                        일기를 작성할<br />
                        계좌를 등록해주세요.
                        <BtnStyle>
                            <Button Text={"등록하기"} Width={"50vw"}></Button>
                        </BtnStyle>
                    </Text>
                    </div>
                </CircleDiv>
            </Wrapper>
            </Slider>
        </Wrap>
      </div>
    );
  }
}

{/* <Circle stroke = {MAIN_COLOR}></Circle> */}