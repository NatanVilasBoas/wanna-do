import { TouchableOpacity } from "react-native"

import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"

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
          <TouchableOpacity activeOpacity={0.6}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Title style={{ marginBottom: 0 }}>Wanna Do</Title>
          <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}
    </Container>
  )
}
