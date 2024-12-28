import { useRef } from "react"
import { Animated } from "react-native"

import Pagination from "../../molecules/Pagination"
import Slideritem from "../../molecules/SliderItem"

interface Props {
  data: {
    title: string
    description: string
  }[]
}

export default function Carroussel({ data }: Props) {
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <>
      <Animated.FlatList
        data={data}
        renderItem={({ item }) => <Slideritem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
      />
      <Pagination items={data} scrollX={scrollX} />
    </>
  )
}
