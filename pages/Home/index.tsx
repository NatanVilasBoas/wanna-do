import Caption from "../../components/atoms/Caption"
import Title from "../../components/atoms/Title"
import BaseButton from "../../components/molecules/BaseButton"
import TaskCard from "../../components/organisms/TaskCard"
import { CardsContainer, HeaderContainer } from "./styles"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Title>Wanna Do</Title>
        <Caption>Seja bem vindo!</Caption>
        <BaseButton>+ Criar tarefa</BaseButton>
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
    </>
  )
}
