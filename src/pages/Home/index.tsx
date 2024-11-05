import { useEffect, useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { collection, onSnapshot } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import Tasks from "../../components/templates/Tasks"
import { Task } from "../../shared/interfaces/Task"
import theme from "../../styles/theme"
import { ButtonContainer, Container, HeaderContainer } from "./styles"

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
          console.log(doc.data())
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
        <Tasks data={tasks} />
      </Container>
    </>
  )
}
