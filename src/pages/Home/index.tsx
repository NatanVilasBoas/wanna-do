import { useEffect, useState } from "react"

import AntDesign from "@expo/vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import CircularProgressBar from "../../components/molecules/CircularProgressBar"
import DateTime from "../../components/molecules/DateTime"
import Carroussel from "../../components/organisms/Carroussel"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import { FilterModal } from "../../components/organisms/FilterModal"
import Header from "../../components/organisms/Header"
import Tasks from "../../components/templates/Tasks"
import { Task } from "../../shared/interfaces/Task"
import theme from "../../styles/theme"
import { ButtonContainer, Container, FilterButton, HeaderContainer } from "./styles"

export default function Home() {
  const navigation = useNavigation()
  const [tasks, setTasks] = useState<Task[]>([])
  const [showFilterModal, setShowFilterModal] = useState(false)

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

  const executeQuery = async ({ status }: { status: Task["status"] }) => {
    const taskRef = collection(FIRESTORE_DB, "tasks")
    setTasks([])
    const subscriber = query(taskRef, where("status", "==", status))

    const querySnapshot = await getDocs(subscriber)
    querySnapshot.docs.forEach(doc => {
      setTasks(prevTasks => [...prevTasks, doc.data() as Task])
    })
  }

  useEffect(() => {
    const taskRef = collection(FIRESTORE_DB, "tasks")

    const subscriber = onSnapshot(taskRef, {
      next: snapshot => {
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
          <Carroussel data={data} />
          <ButtonContainer>
            <BaseButton onPress={() => navigation.navigate("AddTask")}>+ Criar tarefa</BaseButton>
          </ButtonContainer>
          <FilterButton onPress={() => setShowFilterModal(true)}>
            <AntDesign name="filter" size={24} color="white" />
            <Caption style={{ color: theme.colors.greyLightest }}>Filtrar</Caption>
          </FilterButton>
        </HeaderContainer>
        <Tasks data={tasks} />
      </Container>
      <FilterModal
        isVisible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        handleSubmit={value => executeQuery({ status: value })}
      />
    </>
  )
}
