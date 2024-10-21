import { TextInputProps } from "react-native-paper"

import theme from "../../../styles/theme"
import BaseInput from "../../atoms/BaseInput"

interface InputProps extends TextInputProps {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <BaseInput
      style={{
        marginBottom: 24,
        backgroundColor: "transparent"
      }}
      activeUnderlineColor={theme.colors.primaryLight}
      label={label}
      {...props}
    />
  )
}
