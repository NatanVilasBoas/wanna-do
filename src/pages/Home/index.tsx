import { useEffect, useRef, useState } from "react"
import { Animated, FlatList } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { collection, onSnapshot } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import Pagination from "../../components/molecules/Pagination"
import Slideritem from "../../components/molecules/SliderItem"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import Tasks from "../../components/templates/Tasks"
import { Task } from "../../shared/interfaces/Task"
import theme from "../../styles/theme"
import { ButtonContainer, Container, HeaderContainer } from "./styles"

export default function Home() {
  const navigation = useNavigation()
  const [tasks, setTasks] = useState<Task[]>([])
  const [paginationIndex, setPaginationIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const data = [
    {
      title: "teste 1",
      description: "hehehe"
    },
    {
      title: "teste 2",
      description: "hehehe"
    },
    {
      title: "teste 3",
      description: "hehehe"
    },
    {
      title: "teste 4",
      description: "hehehe"
    }
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
          <Caption style={{ color: theme.colors.greyDarkest }}>Seja bem vindo!</Caption>
          <Animated.FlatList
            data={data}
            renderItem={({ item }) => <Slideritem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false } // Necessário para FlatList
            )}
            keyExtractor={(_, index) => index.toString()}
            pagingEnabled
          />
          <Pagination items={data} scrollX={scrollX} />
          <ButtonContainer>
            <BaseButton onPress={() => navigation.navigate("AddTask")}>+ Criar tarefa</BaseButton>
          </ButtonContainer>
        </HeaderContainer>
        <Tasks data={tasks} />
      </Container>
    </>
  )
}
