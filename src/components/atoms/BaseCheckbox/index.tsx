import { Checkbox } from "react-native-paper"

import theme from "../../../styles/theme"

interface BaseCheckboxProps {
  message: string
  checked: boolean
  onCheck: () => void
}

const BaseCheckbox = ({ message, checked, onCheck }: BaseCheckboxProps) => {
  return (
    <Checkbox.Item
      status={checked ? "checked" : "unchecked"}
      onPress={onCheck}
      style={{
        width: "100%"
      }}
      color={theme.colors.primaryMain}
      label={message}
    />
  )
}

export default BaseCheckbox
