import Title from "../../components/atoms/Title"
import Input from "../../components/molecules/Input"
import { Container } from "./styles"

export default function AddTask() {
  return (
    <Container>
      <Title>Nova tarefa</Title>
      <Input label="Título da tarefa" />
      <Input label="Descrição" />
    </Container>
  )
}
