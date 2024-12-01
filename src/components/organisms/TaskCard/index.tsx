import { useState } from "react"
import { View } from "react-native"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import Toast from "react-native-toast-message"

import AntDesign from "@expo/vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
import { collection, deleteDoc, doc } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../../firebaseConfig"
import { Task } from "../../../shared/interfaces/Task"
import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import IconButton from "../../atoms/IconButton"
import { ButtonsContainer, Container, TitleContainer } from "./styles"

interface TaskProps {
  task: Task
}

export default function TaskCard({ task }: TaskProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenOptions, setIsOpenOptions] = useState(false)
  const navigation = useNavigation()

  const handleDelete = async () => {
    await deleteDoc(doc(collection(FIRESTORE_DB, "tasks"), task.id))
      .then(() => {
        Toast.show({
          type: "info",
          text1: "Task excluída!"
        })
      })
      .catch(error => {
        console.error("Error removing document: ", error)
      })
  }

  const handleEdit = () => {
    navigation.navigate("AddTask", { id: task.id })
  }

  return (
    <ReanimatedSwipeable
      overshootRight={false}
      onSwipeableWillOpen={() => setIsOpenOptions(true)}
      onSwipeableWillClose={() => setIsOpenOptions(false)}
      friction={2}
      rightThreshold={50}
      renderRightActions={() => (
        <ButtonsContainer>
          <IconButton onPress={() => handleEdit()}>
            <AntDesign name="edit" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </IconButton>
          <IconButton onPress={() => handleDelete()}>
            <AntDesign name="delete" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
          </IconButton>
        </ButtonsContainer>
      )}
    >
      <Container onPress={() => setIsOpenDropdown(!isOpenDropdown)} priority={task.priority}>
        <TitleContainer>
          <Caption style={{ color: theme.colors.greyLightest, flex: 2 }}>{task.title}</Caption>
          <Description style={{ flex: 1 }}>{task.date}</Description>
          <AntDesign name={isOpenDropdown ? "up" : "down"} size={24} color={theme.colors.greyLightest} />
        </TitleContainer>
        {isOpenDropdown && (
          <View style={{ marginTop: 12 }}>
            <Description style={{ color: theme.colors.greyLightest }}>{task.description}</Description>
          </View>
        )}
      </Container>
    </ReanimatedSwipeable>
  )
}
