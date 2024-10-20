import AntDesign from "@expo/vector-icons/AntDesign"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import { useState } from "react"
import { ButtonsContainer, Container, TitleContainer } from "./styles"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import theme from "../../../styles/theme"
import { TouchableOpacity } from "react-native"

export default function TaskCard() {
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
          <Caption style={{ color: theme.colors.greyLightest }}>Teste 1</Caption>
          <AntDesign name={isOpenDropdown ? "up" : "down"} size={24} color={theme.colors.greyLightest} />
        </TitleContainer>
        {isOpenDropdown && <Description style={{ color: theme.colors.greyLightest }}>Descrição da tarefa</Description>}
      </Container>
    </ReanimatedSwipeable>
  )
}