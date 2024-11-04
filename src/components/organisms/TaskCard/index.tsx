import { useState } from "react"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"

import AntDesign from "@expo/vector-icons/AntDesign"

import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import IconButton from "../../atoms/IconButton"
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
          <IconButton>
            <AntDesign name="edit" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </IconButton>
          <IconButton>
            <AntDesign name="delete" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </IconButton>
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
