import styled from "styled-components/native"

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1
  }
}))`
  background-color: ${props => props.theme.colors.secondaryLight};
  padding-horizontal: 20px;
`
