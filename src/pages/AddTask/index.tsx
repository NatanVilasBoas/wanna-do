import { useState } from "react"
import { Text } from "react-native"
import { SegmentedButtons } from "react-native-paper"

import { addDoc, collection } from "firebase/firestore"
import { useFormik } from "formik"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import Title from "../../components/atoms/Title"
import DateInput from "../../components/molecules/DateInput"
import Input from "../../components/molecules/Input"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import theme from "../../styles/theme"
import { Container, DateContainerRow, Inner } from "./styles"

interface NewTask {
  title: string
  description: string
  priority: "low" | "medium" | "high"
  date: string
}

export default function AddTask() {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const handleSubmit = async ({ title, description, priority, date }: NewTask) => {
    addDoc(collection(FIRESTORE_DB, "tasks"), { title, description, priority, date: date.toString() })
    console.log("task adicionada")
  }

  const onChangeDate = (dateSelected: Date) => {
    if (dateSelected) {
      setDate(dateSelected)
    }
    setShowDatePicker(false)
  }

  const onChangeTime = (dateSelected: Date) => {
    if (dateSelected) {
      setTime(dateSelected)
    }
    setShowTimePicker(false)
  }

  const actualDate = new Date()

  const formatData = (date: Date) => {
    return date
      .toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
      .toString()
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "low",
      date: formatData(actualDate)
    },
    onSubmit: handleSubmit
  })

  return (
    <>
      <CustomStatusBar backgroundColor={theme.colors.greyLightest} />
      <Header backgroundColor={theme.colors.greyLightest} />
      <Container>
        <Inner>
          <Title>Nova tarefa</Title>
          <Input label="Título da tarefa" value={formik.values.title} onChangeText={formik.handleChange("title")} />
          <Input
            label="Descrição"
            value={formik.values.description}
            onChangeText={formik.handleChange("description")}
          />
          <Caption style={{ marginBottom: 16, marginLeft: 16 }}>Prioridade</Caption>
          <SegmentedButtons
            theme={{
              colors: { secondaryContainer: theme.colors.primaryLight, onSecondaryContainer: theme.colors.greyLightest }
            }}
            value={formik.values.priority}
            onValueChange={formik.handleChange("priority")}
            buttons={[
              { value: "low", label: "Baixa" },
              { value: "medium", label: "Média" },
              { value: "high", label: "Alta" }
            ]}
          />
          {/* <Caption>Categoria</Caption> */}
          <DateContainerRow>
            <DateInput
              value={date}
              visible={showDatePicker}
              onPress={() => setShowDatePicker(true)}
              mode="date"
              onConfirm={onChangeDate}
              onCancel={() => setShowDatePicker(false)}
              style={{ width: "45%" }}
            />
            <DateInput
              value={time}
              visible={showTimePicker}
              onPress={() => setShowTimePicker(true)}
              mode="time"
              onConfirm={onChangeTime}
              onCancel={() => setShowTimePicker(false)}
              style={{ width: "45%" }}
            />
          </DateContainerRow>
        </Inner>
        <BaseButton onPress={() => formik.handleSubmit()} style={{ marginBottom: 60 }}>
          <Text style={{ textAlign: "center" }}>Criar tarefa</Text>
        </BaseButton>
      </Container>
    </>
  )
}
