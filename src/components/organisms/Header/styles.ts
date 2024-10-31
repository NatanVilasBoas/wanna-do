import styled from "styled-components/native"

interface ContainerProps {
  backgroundColor?: string
}

export const Container = styled.View<ContainerProps>`
  background-color: ${props => props.backgroundColor ?? props.theme.colors.secondaryMain};
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`
