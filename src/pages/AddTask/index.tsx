import Title from "../../components/atoms/Title"
import Input from "../../components/molecules/Input"

export default function AddTask() {
  return (
    <>
      <Title>Nova tarefa</Title>
      <Input label="Título da tarefa" />
      <Input label="Descrição" />
    </>
  )
}
