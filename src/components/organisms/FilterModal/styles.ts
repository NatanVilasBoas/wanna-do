import styled from "styled-components/native"

export const FilterContainer = styled.View`
  width: 100%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.greyLightest};
  border-radius: 16px;
  padding: 24px;
`

export const CloseButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  position: absolute;
  right: 8px;
  padding: 8px;
  top: 8px;
`
