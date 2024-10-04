import AntDesign from "@expo/vector-icons/AntDesign"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import { useState } from "react"
import { ButtonsContainer, Container, TitleContainer } from "./styles"
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import theme from "../../../styles/theme"
import { TouchableOpacity } from "react-native"

export default function TaskCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Swipeable
      renderRightActions={() => (
        <ButtonsContainer>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="edit" size={24} color={theme.colors.secondaryLight} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="delete" size={24} color={theme.colors.secondaryLight} />
          </TouchableOpacity>
        </ButtonsContainer>
      )}
    >
      <Container onPress={() => setIsOpen(!isOpen)}>
        <TitleContainer>
          <Caption>Teste 1</Caption>
          <AntDesign name={isOpen ? "up" : "down"} size={24} color={theme.colors.greyDarkest} />
        </TitleContainer>
        {isOpen && <Description>Descrição da tarefa</Description>}
      </Container>
    </Swipeable>
  )
}
