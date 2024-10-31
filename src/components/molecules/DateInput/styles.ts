import styled from "styled-components/native"

export const DateInputContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  padding: 12px;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.primaryLight};
`

export const ValueText = styled.Text`
  font-size: 16px;
`
