import { TextInputProps } from "react-native-paper"
import BaseInput from "../../atoms/BaseInput"

interface InputProps extends TextInputProps {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return <BaseInput mode="outlined" label={label} {...props} />
}
