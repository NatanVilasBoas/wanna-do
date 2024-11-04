import styled from "styled-components/native"

export const CardsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 20
  }
}))`
  background-color: ${props => props.theme.colors.greyLightest};
  padding: 32px 16px 0px;
  border-radius: 40px 40px 0px 0px;
`
