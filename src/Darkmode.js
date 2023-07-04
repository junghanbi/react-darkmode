import React, { useEffect, useState } from 'react'
import {MdDarkMode} from "react-icons/md"
import {BsSun} from "react-icons/bs"
import styled from "styled-components"

const Darkmode = ({onToggle, toggle}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    },1000);
    return () => clearInterval(id)
  },[])

  return (
    <Container>
      <HeaderWrapper>
        <h1>Jung Hanbi</h1>
        {!toggle ? (<DarkButton onClick={onToggle} />) : 
        (<LightButton onClick={onToggle}/>) }
      </HeaderWrapper>
      <DateTimer>{time.toLocaleDateString()}</DateTimer>
      <HourTimer>{time.toLocaleTimeString()}</HourTimer>
    </Container>
  )
}

// 스타일 꾸미기!!!-------------------------------
//container꾸미기
const Container = styled.div`
  width : 100%;
  height : 100vh;
  background : ${(props) => props.theme.bgColor};
  color : ${(props) => props.theme.textColor};
  font-size : 42px;
`;

// headerwrapper꾸미기
const HeaderWrapper = styled.header`
  width: 100%;
  height : 50px;
  display :flex;
  justify-content:space-between;
  align-items : center;
  padding : 0 20px;
  box-sizing : border-box;
  background : ${(props) => props.theme.headerColor};
  h1{
    color : ${(props) => props.theme.headerText};
    font-size : 40px;
  }
`;

//날짜 꾸미기
const DateTimer = styled.p`
  text-align : center;
  font-size : 150%;
`;

//시간 꾸미기
const HourTimer = styled.p`
  text-align : center;
  font-size : 200%;
`;

//react-icon 꾸미기
//html태그 이외의 스타일을 꾸밀때는 소괄호사용!!!
const DarkButton = styled(MdDarkMode)`
  font-size : 32px;
  color : ${(props) => props.theme.headerText};
  cursor : pointer;
`;
const LightButton = styled(BsSun)`
  font-size : 32px;
  color : ${(props) => props.theme.headerText};
  cursor : pointer;
`;

export default Darkmode