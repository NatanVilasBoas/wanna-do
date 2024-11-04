import { Task } from "../../../shared/interfaces/Task"
import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import TaskCard from "../../organisms/TaskCard"
import { CardsContainer } from "./styles"

type Props = {
  data: Task[]
}

export default function Tasks({ data }: Props) {
  return (
    <CardsContainer>
      {data.length === 0 && (
        <Caption style={{ color: theme.colors.greyDarkest, textAlign: "center", marginTop: 64 }}>
          Não há tarefas no momento.
        </Caption>
      )}
      {data.map(task => {
        return <TaskCard key={task.id} title={task.title} description={task.description} />
      })}
    </CardsContainer>
  )
}
