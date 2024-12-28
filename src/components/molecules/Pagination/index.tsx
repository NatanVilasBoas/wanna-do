import { Animated, Dimensions } from "react-native"

import { Container } from "./styles"

interface Props {
  items: {
    title: string
    description?: string
  }[]
  scrollX: Animated.Value
}

const { width } = Dimensions.get("screen")

export default function Pagination({ items, scrollX }: Props) {
  return (
    <Container>
      {items.map((_, index) => {
        const inputRange = [
          (index - 1) * width, // Substitua pela largura do item (ITEM_WIDTH)
          index * width,
          (index + 1) * width
        ]

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.2, 0.8], // Suaviza o tamanho
          extrapolate: "clamp"
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5], // Suaviza a opacidade
          extrapolate: "clamp"
        })

        return (
          <Animated.View
            key={index}
            style={{
              transform: [{ scale }],
              opacity,
              height: 8,
              width: 8,
              borderRadius: 100,
              backgroundColor: "#eee"
            }}
          />
        )
      })}
    </Container>
  )
}
