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
import { dateFormat, timeFormat } from "../../shared/utils/dateFormat"
import theme from "../../styles/theme"
import { Container, DateContainerRow, Inner } from "./styles"

interface NewTask {
  title: string
  description: string
  priority: "low" | "medium" | "high"
  date: string
  time: string
}

export default function AddTask() {
  const handleSubmit = async ({ title, description, priority, date, time }: NewTask) => {
    addDoc(collection(FIRESTORE_DB, "tasks"), { title, description, priority, date, time })
    console.log("task adicionada")
  }

  const validateTime = (text: string) => {
    const isValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(text)
    return isValid
  }

  const actualDate = new Date()

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "low",
      date: dateFormat(actualDate),
      time: timeFormat(actualDate)
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
              value={formik.values.date}
              mode="date"
              onChangeText={text => formik.handleChange("date")(text)}
              containerStyle={{ width: "55%" }}
            />
            <DateInput
              value={formik.values.time}
              mode="time"
              onChangeText={text => {
                formik.handleChange("time")(text)
              }}
              containerStyle={{ width: "35%" }}
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
