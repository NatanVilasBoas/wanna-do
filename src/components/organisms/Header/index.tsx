import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"

import IconButton from "../../atoms/IconButton"
import Title from "../../atoms/Title"
import { Container } from "./styles"

interface HeaderProps {
  mode?: "home"
  backgroundColor?: string
}

export default function Header({ mode, backgroundColor }: HeaderProps) {
  const navigation = useNavigation()

  return (
    <Container backgroundColor={backgroundColor}>
      {mode === "home" ? (
        <>
          <IconButton>
            <Feather name="menu" size={24} color="black" />
          </IconButton>
          <Title style={{ marginBottom: 0 }}>Wanna Do</Title>
          <IconButton>
            <AntDesign name="user" size={24} color="black" />
          </IconButton>
        </>
      ) : (
        <IconButton activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </IconButton>
      )}
    </Container>
  )
}
