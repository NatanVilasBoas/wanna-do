import styled from "styled-components/native"

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.View<ContainerProps>`
  padding-horizontal: 16px;
  border-bottom-width: ${props => (props.isActive ? 1 : 0.5)}px;
  font-size: 16px;
  border-color: ${props => (props.isActive ? props.theme.colors.primaryMain : props.theme.colors.primaryLight)};
`
