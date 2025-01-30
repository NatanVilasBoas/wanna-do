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

export const FilterButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7
}))`
  position: absolute;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  bottom: 0;
  left: 0;
  padding: 16px 24px;
  margin: 20px 10px;
`
