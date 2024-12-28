import { Dimensions } from "react-native"

import styled from "styled-components/native"

const { width } = Dimensions.get("screen")

export const Container = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`
