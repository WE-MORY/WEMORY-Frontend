import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
// import cat from '../../assets/Images/textImg/cat2.png'
import { MAIN_COLOR } from '../../assets/Colors/Color';
import {ReactComponent as Circle} from '../../assets/Images/circle.svg';
import Button from '../../assets/Button/Button';

const CircleDiv = styled.div`
    /* position: absolute; */
    justify-content: center;
    align-items: center;
    display: flex;
    position:relative;
    flex-direction: column;
    height: 65vh;
    &div{
        width: 100px;
        height: 100px;
        overflow-x: hidden;
    
    }
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

    }
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* position: absolute; */
    text-align: center;
    height : 18vh;
    width : 50vw;
    font-size: 1.4rem;
    overflow-x: hidden;

    
`


const Wrapper = styled.div`
    width: 30vw;
    height: 60vh;
`

const Wrap = styled.div`
  /* margin: 5% auto; */
  width: 100vw;

  /* .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  } */
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