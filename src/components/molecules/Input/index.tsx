import { TextInputProps } from "react-native"
import BaseInput from "../../atoms/BaseInput"
import Caption from "../../atoms/Caption"

interface InputProps extends TextInputProps {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      <Caption style={{ marginBottom: 8 }}>{label}</Caption>
      <BaseInput {...props} />
    </>
  )
}
