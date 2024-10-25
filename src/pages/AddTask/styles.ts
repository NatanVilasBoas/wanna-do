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
