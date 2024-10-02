import Title from "../../atoms/Title"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"
import { Container } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableOpacity } from "react-native"

export default function Header() {
  return (
    <SafeAreaView>
      <Container>
        <TouchableOpacity activeOpacity={0.6}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Title>Wanna Do</Title>
        <TouchableOpacity activeOpacity={0.6}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  )
}
