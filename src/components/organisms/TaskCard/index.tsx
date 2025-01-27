import { useState } from "react"
import { View } from "react-native"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import Toast from "react-native-toast-message"
import Tooltip from "react-native-walkthrough-tooltip"

import AntDesign from "@expo/vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
import dayjs from "dayjs"
import { collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"

import { FIRESTORE_DB } from "../../../../firebaseConfig"
import { Task } from "../../../shared/interfaces/Task"
import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import Description from "../../atoms/Description"
import IconButton from "../../atoms/IconButton"
import { ButtonsContainer, Container, StatusTagContainer, TitleContainer, TooltipContainer } from "./styles"

interface TaskProps {
  task: Task
}

export default function TaskCard({ task }: TaskProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenOptions, setIsOpenOptions] = useState(false)
  const [toolTipVisible, setToolTipVisible] = useState(false)
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

  const handleChangeStats = async ({ status }: { status: Task["status"] }) => {
    try {
      const taskRef = doc(collection(FIRESTORE_DB, "tasks"), task.id)
      const docSnapshot = await getDoc(taskRef)
      await updateDoc(taskRef, { ...docSnapshot.data, status })
      setToolTipVisible(false)
      Toast.show({
        type: "success",
        text1: "Status da task atualizado"
      })
    } catch {
      Toast.show({
        type: "error",
        text1: "Falha ao atualizar status",
        text2: "Tente novamente mais tarde"
      })
    }
  }

  const TooltipContent = () => {
    return (
      <TooltipContainer>
        <IconButton onPress={() => handleChangeStats({ status: "todo" })}>
          <Caption>A fazer</Caption>
        </IconButton>
        <IconButton onPress={() => handleChangeStats({ status: "doing" })}>
          <Caption>Fazendo</Caption>
        </IconButton>
        <IconButton onPress={() => handleChangeStats({ status: "done" })}>
          <Caption>Feito</Caption>
        </IconButton>
      </TooltipContainer>
    )
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
          <Tooltip
            isVisible={toolTipVisible}
            content={<TooltipContent />}
            arrowSize={{ width: 0, height: 0 }}
            onClose={() => setToolTipVisible(false)}
            contentStyle={{
              width: "100%",
              flex: 1,
              padding: 16,
              borderRadius: 16
            }}
          >
            <IconButton
              onPress={() => {
                setToolTipVisible(true)
              }}
            >
              <AntDesign name="swap" size={24} color={isOpenOptions ? theme.colors.greyDarkest : "transparent"} />
            </IconButton>
          </Tooltip>
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
        <StatusTagContainer status={task.status}></StatusTagContainer>
        <TitleContainer>
          <Caption
            style={{
              color: theme.colors.greyLightest,
              flex: 2,
              textDecorationLine: task.status === "done" ? "line-through" : "none"
            }}
          >
            {task.title}
          </Caption>
          <Description style={{ flex: 1, color: theme.colors.greyLightest }}>
            {dayjs(task.date).format("DD/MM/YY [às] HH:mm")}
          </Description>
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
