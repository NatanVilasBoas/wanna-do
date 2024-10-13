import { TextInput, TextInputProps } from "react-native-paper"
import theme from "../../../styles/theme"

export default function BaseInput({ ...props }: TextInputProps) {
  return (
    <TextInput
      {...props}
      outlineStyle={{
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.colors.greyDarkest,
        borderRadius: 20
      }}
      activeOutlineColor={theme.colors.primaryLight}
    />
  )
}
