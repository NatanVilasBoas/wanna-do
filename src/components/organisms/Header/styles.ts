import styled from "styled-components/native"

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondaryMain};
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`
