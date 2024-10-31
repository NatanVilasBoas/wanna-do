import { useEffect, useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { collection, onSnapshot } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import TaskCard from "../../components/organisms/TaskCard"
import theme from "../../styles/theme"
import { ButtonContainer, CardsContainer, Container, HeaderContainer } from "./styles"

interface Task {
  id: string
  title: string
  description: string
}

export default function Home() {
  const navigation = useNavigation()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const taskRef = collection(FIRESTORE_DB, "tasks")

    const subscriber = onSnapshot(taskRef, {
      next: snapshot => {
        console.log("UPDATED")

        const tasks: Task[] = []
        snapshot.docs.forEach(doc => {
          tasks.push({
            id: doc.id,
            ...doc.data()
          } as Task)
        })
        setTasks(tasks)
      }
    })

    return () => subscriber()
  }, [])

  return (
    <>
      <CustomStatusBar />
      <Header mode="home" />
      <Container>
        <HeaderContainer>
          <Caption style={{ color: theme.colors.greyDarkest }}>Seja bem vindo!</Caption>
          <ButtonContainer>
            <BaseButton onPress={() => navigation.navigate("AddTask")}>+ Criar tarefa</BaseButton>
          </ButtonContainer>
        </HeaderContainer>
        <CardsContainer>
          {tasks.length === 0 && (
            <Caption style={{ color: theme.colors.greyDarkest, textAlign: "center", marginTop: 64 }}>
              Não há tarefas no momento.
            </Caption>
          )}
          {tasks.map(task => {
            return <TaskCard key={task.id} title={task.title} description={task.description} />
          })}
        </CardsContainer>
      </Container>
    </>
  )
}
