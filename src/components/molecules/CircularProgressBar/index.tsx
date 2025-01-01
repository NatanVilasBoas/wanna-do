import { View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator"

import theme from "../../../styles/theme"
import Description from "../../atoms/Description"
import Title from "../../atoms/Title"
import { Container } from "./styles"

interface Props {
  key?: string
  value: number
  highPriorityTasks: number
  highPriorityTasksConclused: number
}

export default function CircularProgressBar({ key, value, highPriorityTasks, highPriorityTasksConclused }: Props) {
  return (
    <Container key={key}>
      <CircularProgress
        value={Math.round(value)}
        radius={64}
        inActiveStrokeWidth={20}
        activeStrokeWidth={20}
        duration={2000}
        progressValueColor={"white"}
        maxValue={100}
        valueSuffix={"%"}
        showProgressValue={false}
        activeStrokeColor={theme.colors.primaryLight}
        inActiveStrokeColor={theme.colors.primaryMain}
      />
      <View
        style={{
          marginLeft: 24
        }}
      >
        <Description style={{ color: "white", fontSize: 16 }}>Tasks Concluídas</Description>
        <Title style={{ color: "white" }}>{Math.round(value)}%</Title>
        <Description style={{ color: "white", fontSize: 14 }}>Alta prioridade concluídas</Description>
        <Description
          style={{ color: "white", fontSize: 14 }}
        >{`${highPriorityTasksConclused} / ${highPriorityTasks}`}</Description>
      </View>
    </Container>
  )
}
