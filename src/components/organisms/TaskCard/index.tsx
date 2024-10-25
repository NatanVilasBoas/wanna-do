import { useState } from "react"
import { TouchableOpacity } from "react-native"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"

import AntDesign from "@expo/vector-icons/AntDesign"

import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import { ButtonsContainer, Container, TitleContainer } from "./styles"

interface TaskProps {
  title: string
  description: string
}

export default function TaskCard({ title, description }: TaskProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenOptions, setIsOpenOptions] = useState(false)

  return (
    <ReanimatedSwipeable
      overshootRight={false}
      onSwipeableWillOpen={() => setIsOpenOptions(true)}
      onSwipeableWillClose={() => setIsOpenOptions(false)}
      friction={2}
      rightThreshold={50}
      renderRightActions={() => (
        <ButtonsContainer>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="edit" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="delete" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </TouchableOpacity>
        </ButtonsContainer>
      )}
    >
      <Container onPress={() => setIsOpenDropdown(!isOpenDropdown)}>
        <TitleContainer>
          <Caption style={{ color: theme.colors.greyLightest }}>{title}</Caption>
          <AntDesign name={isOpenDropdown ? "up" : "down"} size={24} color={theme.colors.greyLightest} />
        </TitleContainer>
        {isOpenDropdown && <Description style={{ color: theme.colors.greyLightest }}>{description}</Description>}
      </Container>
    </ReanimatedSwipeable>
  )
}
