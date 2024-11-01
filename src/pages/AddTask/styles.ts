import styled from "styled-components/native"

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1
  }
}))`
  background-color: ${props => props.theme.colors.greyLightest};
`

export const Inner = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`

export const DateContainerRow = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
`
