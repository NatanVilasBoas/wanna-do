import Caption from "../../components/atoms/Caption"
import BaseButton from "../../components/atoms/BaseButton"
import TaskCard from "../../components/organisms/TaskCard"
import { CardsContainer, HeaderContainer, Container, ButtonContainer } from "./styles"
import { useNavigation } from "@react-navigation/native"
import theme from "../../styles/theme"

export default function Home() {
  const navigation = useNavigation()

  return (
    <Container>
      <HeaderContainer>
        <Caption style={{ color: theme.colors.greyDarkest }}>Seja bem vindo!</Caption>
        <ButtonContainer>
          <BaseButton onPress={() => navigation.navigate("AddTask")}>+ Criar tarefa</BaseButton>
        </ButtonContainer>
      </HeaderContainer>
      <CardsContainer>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </CardsContainer>
    </Container>
  )
}
