import Caption from "../../components/atoms/Caption"
import BaseButton from "../../components/molecules/BaseButton"
import TaskCard from "../../components/organisms/TaskCard"
import { CardsContainer, HeaderContainer, Container, ButtonContainer } from "./styles"

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Caption>Seja bem vindo!</Caption>
        <ButtonContainer>
          <BaseButton>+ Criar tarefa</BaseButton>
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
