import { View } from "react-native"
import { HelperText, TextInputProps } from "react-native-paper"

import theme from "../../../styles/theme"
import BaseInput from "../../atoms/BaseInput"

interface InputProps extends TextInputProps {
  label?: string
  showError?: boolean
  textError?: string
}

export default function Input({ label, showError, textError, ...props }: InputProps) {
  return (
    <View style={{ marginBottom: 24 }}>
      <BaseInput
        style={{
          backgroundColor: "transparent"
        }}
        activeUnderlineColor={theme.colors.primaryLight}
        label={label}
        {...props}
      />
      <HelperText type="error" visible={showError}>
        {textError}
      </HelperText>
    </View>
  )
}
