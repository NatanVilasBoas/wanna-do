import { ActivityIndicator } from "react-native-paper"

import { Task } from "../../../shared/interfaces/Task"
import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import TaskCard from "../../organisms/TaskCard"
import { CardsContainer } from "./styles"

type Props = {
  data: Task[]
  isLoading: boolean
}

export default function Tasks({ data, isLoading }: Props) {
  return (
    <CardsContainer>
      {isLoading && <ActivityIndicator color={theme.colors.primaryMain} />}
      {data.length === 0 && !isLoading && (
        <Caption style={{ color: theme.colors.greyDarkest, textAlign: "center", marginTop: 64 }}>
          Não há tarefas no momento.
        </Caption>
      )}
      {data.map(task => {
        return <TaskCard key={task.id} task={task} />
      })}
    </CardsContainer>
  )
}
