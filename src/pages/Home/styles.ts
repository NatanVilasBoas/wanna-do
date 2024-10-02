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

export const CardsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1
  }
}))`
  background-color: ${props => props.theme.colors.greyDarkest};
  padding: 32px 16px 0px;
  border-radius: 40px 40px 0px 0px;
`
