import { View, ViewProps } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"

import Caption from "../../atoms/Caption"
import { DateInputContainer, ValueText } from "./styles"

interface DateInputProps extends ViewProps {
  visible: boolean
  value: Date
  onConfirm: (date: Date) => void
  onPress: () => void
  onCancel: () => void
  mode: "date" | "time"
}

const dateFormat = (value: Date) => {
  return value.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
}

const timeFormat = (value: Date) => {
  return value.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
}

export default function DateInput({ visible, value, onConfirm, onCancel, onPress, mode, ...props }: DateInputProps) {
  return (
    <View {...props}>
      <Caption>{mode === "date" ? "Data:" : "Horário:"}</Caption>
      <DateInputContainer onPress={onPress}>
        <ValueText>{mode === "date" ? dateFormat(value) : timeFormat(value)}</ValueText>
        <DateTimePickerModal isVisible={visible} mode={mode} onConfirm={onConfirm} onCancel={onCancel} />
      </DateInputContainer>
    </View>
  )
}
