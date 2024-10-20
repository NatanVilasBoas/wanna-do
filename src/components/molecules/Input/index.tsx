import { TextInputProps } from "react-native-paper"
import BaseInput from "../../atoms/BaseInput"

interface InputProps extends TextInputProps {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <BaseInput
      mode="outlined"
      style={{
        marginBottom: 24
      }}
      label={label}
      {...props}
    />
  )
}
