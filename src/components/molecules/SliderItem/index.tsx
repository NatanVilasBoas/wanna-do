import { Container } from "./styles"

interface Props {
  item: React.ReactNode
}

export default function Slideritem({ item }: Props) {
  return <Container>{item}</Container>
}
