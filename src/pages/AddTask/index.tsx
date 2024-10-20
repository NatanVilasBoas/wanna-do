import Title from "../../components/atoms/Title"
import Input from "../../components/molecules/Input"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import theme from "../../styles/theme"
import { Container } from "./styles"

export default function AddTask() {
  return (
    <>
      <CustomStatusBar backgroundColor={theme.colors.secondaryLight} />
      <Container>
        <Title>Nova tarefa</Title>
        <Input label="Título da tarefa" />
        <Input label="Descrição" />
      </Container>
    </>
  )
}
