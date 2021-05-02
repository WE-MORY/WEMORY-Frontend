import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import Button from '../../../assets/Button/Button'

const ModalDiv = styled.div`
    display: flex; 
    padding-top: 15vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    button{
        /* margin-top: 6vh; */
    }
`
const InputDiv = styled.div `
    display: flex; 
    /* justify-content: center; */
    align-items: center;
    padding: 4vh 0;
`

const Titlediv = styled.div`
    /* margin-top: 10vh; */
    font-size: 1.2rem;
    text-align: center;

`

const InputStyle = styled.input`
    display: inline-block;
    border-style: none;
    border-bottom: 1px solid black;
    /* margin: 3vh 0; */
    width: 40vw;

    &:focus{
        transition: .3s;
        border-bottom: 1.2px solid #77A6FF;
        outline-style: none;
    }
`

const useStyles = makeStyles((theme) => ({
    // 모달 전체 레이아웃 (flex 중앙정렬)
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
//   모달 창에 대한 스타일. 너비, 높이, radius, 등 설정 가능  
  paper: {
    width: 250,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Button Text={"다음 단계로 이동하기"} Width={"70vw"} OnClick={handleOpen}/>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        {/* classes.paper 부분 남기고 div 부분은 커스텀 가능 */}
          <ModalDiv className={classes.paper}>
              {/* ~~ 여기부터 커스텀 가능 ~~  */}
            <Titlediv>연결된 계좌로 넣을 <br />금액을 입력해주세요.</Titlediv>
            <InputDiv>
                <InputStyle /> 
                <span>원</span>
            </InputDiv>
            <Button Text={"추억 만들기"} Width={"45vw"} />
          </ModalDiv>
           {/* classes.paper 부분 남기고 div 부분은 커스텀 가능 */}
        </Fade>
      </Modal>
    </div>
  );
}
