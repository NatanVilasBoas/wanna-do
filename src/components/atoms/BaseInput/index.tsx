import { TextInputProps } from "react-native"
import { StyledInput } from "./styles"

export default function BaseInput({ ...props }: TextInputProps) {
  return <StyledInput {...props} />
}
