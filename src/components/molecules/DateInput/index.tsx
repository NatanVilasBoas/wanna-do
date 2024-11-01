import { useState } from "react"
import { TextInputProps, ViewProps } from "react-native"
import MaskInput, { Masks } from "react-native-mask-input"
import { HelperText } from "react-native-paper"

import theme from "../../../styles/theme"
import Description from "../../atoms/Description"
import { Container, StyledMaskInput } from "./styles"

interface DateInputProps extends TextInputProps {
  value: string
  mode: "date" | "time"
  containerStyle?: ViewProps["style"]
  showError?: boolean
  textError?: string
}

export default function DateInput({ value, mode, containerStyle, showError, textError, ...props }: DateInputProps) {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container style={containerStyle}>
      <Description
        style={{
          paddingBottom: 4,
          color: isActive ? theme.colors.primaryLight : theme.colors.greyDarkest
        }}
      >
        {mode === "date" ? "Data" : "Horário"}
      </Description>
      <StyledMaskInput
        isActive={isActive}
        style={{ fontSize: 16, ...(typeof props.style === "object" ? props.style : {}) }}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={value}
        mask={mode === "time" ? [/\d/, /\d/, ":", /\d/, /\d/] : Masks.DATE_DDMMYYYY}
        keyboardType="decimal-pad"
        {...props}
      />
      <HelperText type="error" visible={showError}>
        {textError}
      </HelperText>
    </Container>
  )
}
