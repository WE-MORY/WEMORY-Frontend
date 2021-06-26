import styled from 'styled-components';
import React from 'react'
import { MAIN_COLOR, TEXT_BLACK } from '../../../assets/Colors/Color';
import {Link, Redirect} from 'react-router-dom';


const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited{
    color: #4B5364;
  }
`

const ListBox = styled.div`
    width: 100%;
    margin: 20px auto;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0 10px;
    padding: 0 15px;
    ::active {
        transition: .8s;
        background-color: grey;
    }
`;

// 이미지 컨테이너
const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    margin-right: 5px;
`;

const Img = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;
`;

const TextBox = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    min-width: 135px;
    height: 80px;
`;

const SubTitle = styled.p`
    font-family: 'Cafe24';
    font-size: 1.3rem;
    height: 25%;
    margin-bottom: 10px;
`;

const BoxContent = styled.p`
    font-family: 'Cafe24';
    height: 50%;
    width: 60vw;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DatetimeText = styled.span`
    flex: 1;
    font-family: 'Spoqa-Light';
`;

const PostMoneyText = styled.span`
    flex: 1;
    font-family: 'Spoqa-Light';
    text-align: right;
`;

const LineText = styled.div`
    display: flex;
	flex-basis: 100%;
	align-items: center;
	color: ${TEXT_BLACK};
	font-size: 12px;
	margin: 8px 0px;
    ::before,
    ::after{
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 10px;
    }
`;

function ListDataStyle() {
    return (
        <div>
            <ListBox>
                <LineText>5월 - 180,000원</LineText>
                <StyledLink to="/diarydetail">
                    <ContentBox>
                        <ImgBox>
                            <Img src="https://wemory.s3-ap-northeast-1.amazonaws.com/Post/2021/05/KakaoTalk_20200825_173228027_01.jpg" />
                        </ImgBox>
                        <TextBox>
                            <SubTitle>옹이 생일</SubTitle>
                            <BoxContent>간식 대신 스테이크 사줘야지~</BoxContent>
                            <FooterContent>
                                <DatetimeText>5. 3</DatetimeText>
                                <PostMoneyText>+10,000원</PostMoneyText>
                            </FooterContent>
                        </TextBox>
                    </ContentBox>
                </StyledLink>
            </ListBox>
        </div>
    )
}

export default ListDataStyle
