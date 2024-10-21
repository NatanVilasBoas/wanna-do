import { useState } from "react"
import { Text } from "react-native"
import { SegmentedButtons } from "react-native-paper"

import BaseButton from "../../components/atoms/BaseButton"
import Caption from "../../components/atoms/Caption"
import Title from "../../components/atoms/Title"
import Input from "../../components/molecules/Input"
import CustomStatusBar from "../../components/organisms/CustomStatusBar"
import theme from "../../styles/theme"
import { Container, Inner } from "./styles"

export default function AddTask() {
  const [priority, setPriority] = useState("")

  return (
    <>
      <CustomStatusBar backgroundColor={theme.colors.greyLightest} />
      <Container>
        <Inner>
          <Title>Nova tarefa</Title>
          <Input label="Título da tarefa" />
          <Input label="Descrição" />
          <Caption style={{ marginBottom: 16 }}>Prioridade</Caption>
          <SegmentedButtons
            theme={{
              colors: { secondaryContainer: theme.colors.primaryLight, onSecondaryContainer: theme.colors.greyLightest }
            }}
            value={priority}
            onValueChange={setPriority}
            buttons={[
              { value: "baixa", label: "Baixa" },
              { value: "media", label: "Média" },
              { value: "alta", label: "Alta" }
            ]}
          />
        </Inner>
        <BaseButton style={{ marginBottom: 60 }}>
          <Text style={{ textAlign: "center" }}>Criar tarefa</Text>
        </BaseButton>
      </Container>
    </>
  )
}
