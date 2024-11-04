import styled from "styled-components/native"

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondaryMain};
  flex: 1;
`

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`
