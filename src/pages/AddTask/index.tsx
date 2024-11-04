import { Text } from "react-native"
import { SegmentedButtons } from "react-native-paper"
import Toast from "react-native-toast-message"

import { RouteProp } from "@react-navigation/native"
import { addDoc, collection } from "firebase/firestore"
import { useFormik } from "formik"
import { object, string } from "yup"

import { FIRESTORE_DB } from "../../../firebaseConfig"
import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import Title from "../../components/atoms/Title"
import DateInput from "../../components/molecules/DateInput"
import Input from "../../components/molecules/Input"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import Header from "../../components/organisms/Header"
import { RootStack } from "../../routes/types"
import { dateFormat, timeFormat } from "../../shared/utils/dateFormat"
import theme from "../../styles/theme"
import { Container, DateContainerRow, Inner } from "./styles"

type NewTask = {
  title: string
  description: string
  priority: "low" | "medium" | "high"
  status: "todo" | "doing" | "done"
  date: string
  time: string
}

type AddTaskProps = {
  route: RouteProp<RootStack, "AddTask">
}

const validationSchema = object({
  title: string().required("Título é obrigatório"),
  priority: string().required("Prioridade é obrigatória"),
  date: string().required("Data é obrigatória"),
  time: string()
    .required("Horário é obrigatório")
    .test("Horário inválido", value => validateTime(value))
})

const validateTime = (text: string) => {
  const isValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(text)
  return isValid
}

export default function AddTask({ route }: AddTaskProps) {
  const params = route.params

  const handleSubmit = async ({ title, description, priority, date, time }: NewTask) => {
    try {
      addDoc(collection(FIRESTORE_DB, "tasks"), { title, description, priority, date, time })
      Toast.show({
        type: "success",
        text1: "Task criada"
      })
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Não foi possível criar a task",
        text2: error
      })
    }
  }

  const actualDate = new Date()

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "low",
      date: dateFormat(actualDate),
      time: timeFormat(actualDate),
      status: "todo"
    },
    validationSchema,
    onSubmit: handleSubmit
  })

  return (
    <>
      <CustomStatusBar backgroundColor={theme.colors.greyLightest} />
      <Header backgroundColor={theme.colors.greyLightest} />
      <Container>
        <Inner>
          <Title>Nova tarefa</Title>
          <Input
            label="Título da tarefa"
            value={formik.values.title}
            onChangeText={formik.handleChange("title")}
            showError={!!formik.errors.title}
            textError={formik.errors.title}
          />
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
              showError={!!formik.errors.time}
              textError={formik.errors.time}
            />
          </DateContainerRow>
          {params?.isEdit && (
            <SegmentedButtons
              theme={{
                colors: {
                  secondaryContainer: theme.colors.primaryLight,
                  onSecondaryContainer: theme.colors.greyLightest
                }
              }}
              value={formik.values.status}
              onValueChange={formik.handleChange("status")}
              buttons={[
                { value: "todo", label: "A fazer" },
                { value: "doing", label: "Fazendo" },
                { value: "done", label: "Feito" }
              ]}
            />
          )}
        </Inner>
        <BaseButton onPress={() => formik.handleSubmit()} style={{ marginBottom: 60 }}>
          <Text style={{ textAlign: "center" }}>Criar tarefa</Text>
        </BaseButton>
      </Container>
    </>
  )
}
