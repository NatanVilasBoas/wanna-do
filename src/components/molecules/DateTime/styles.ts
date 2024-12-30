import styled from "styled-components/native"

export const Container = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  padding: 12px 24px;
`

export const DateContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TimeAndDayContainer = styled.View`
  margin-left: 12px;
`

export const DateText = styled.Text`
  color: #fff;
  font-size: 60px;
  margin: 0px;
`

export const TimeText = styled(DateText)`
  font-size: 24px;
`

export const GreetingsText = styled(DateText)`
  position: absolute;
  top: 0px;
  left: 16px;
  font-size: 20px;
`
