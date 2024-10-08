import styled from "styled-components/native"

export const StyledInput = styled.TextInput`
  border: 2px solid ${props => props.theme.colors.primaryMain};
  background-color: ${props => props.theme.colors.secondaryLight};
  padding: 12px 20px;
  border-radius: 20px;
`
