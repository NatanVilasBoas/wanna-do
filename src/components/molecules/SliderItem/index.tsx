import { Dimensions, View } from "react-native"

import Description from "../../atoms/Description"
import Title from "../../atoms/Title"
import { Container } from "./styles"

interface Props {
  item: {
    title: string
    description?: string
  }
}

export default function Slideritem({ item }: Props) {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </Container>
  )
}
