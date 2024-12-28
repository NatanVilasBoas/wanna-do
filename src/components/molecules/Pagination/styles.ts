import styled from "styled-components/native"

interface DotProps {
  active: boolean
}

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`

export const Dot = styled.View<DotProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ active }) => (active ? "#000" : "#eee")};
  border-radius: 100px;
`
