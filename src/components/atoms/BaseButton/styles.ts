import styled from "styled-components/native"

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${props => props.theme.colors.primaryMain};
  padding: 16px 24px;
  border-radius: 32px;
  margin: 20px;
`
