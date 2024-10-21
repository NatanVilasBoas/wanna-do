import styled from "styled-components/native"

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primaryLight};
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  background-color: transparent;
  margin: 0px 24px;
`
