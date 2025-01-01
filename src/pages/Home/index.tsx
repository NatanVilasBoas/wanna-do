import { useEffect, useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { collection, onSnapshot } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Title from "../../components/atoms/Title"
import CircularProgressBar from "../../components/molecules/CircularProgressBar"
import DateTime from "../../components/molecules/DateTime"
import Carroussel from "../../components/organisms/Carroussel"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import Tasks from "../../components/templates/Tasks"
import { Task } from "../../shared/interfaces/Task"
import { ButtonContainer, Container, HeaderContainer } from "./styles"

export default function Home() {
  const navigation = useNavigation()
  const [tasks, setTasks] = useState<Task[]>([])

  // Cálculo de porcentagem geral
  const completedTasks = tasks.filter(task => task.status === "done").length
  const totalTasks = tasks.length
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  // Cálculo de porcentagem para tarefas de alta prioridade
  const highPriorityTasks = tasks.filter(task => task.priority === "high")
  const completedHighPriorityTasks = highPriorityTasks.filter(task => task.status === "done").length

  const data: React.ReactNode[] = [
    <DateTime key="1" />,
    <CircularProgressBar
      key="2"
      value={completionPercentage}
      highPriorityTasks={highPriorityTasks.length}
      highPriorityTasksConclused={completedHighPriorityTasks}
    />
  ]

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
          <Carroussel data={data} />
          <ButtonContainer>
            <BaseButton onPress={() => navigation.navigate("AddTask")}>+ Criar tarefa</BaseButton>
          </ButtonContainer>
        </HeaderContainer>
        <Tasks data={tasks} />
      </Container>
    </>
  )
}
