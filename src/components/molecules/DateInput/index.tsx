import { useState } from "react"
import { TextInputProps, ViewProps } from "react-native"
import MaskInput, { Masks } from "react-native-mask-input"

import theme from "../../../styles/theme"
import Caption from "../../atoms/Caption"
import { Container } from "./styles"

interface DateInputProps extends TextInputProps {
  value: string
  mode: "date" | "time"
  containerStyle?: ViewProps["style"]
}

export default function DateInput({ value, mode, containerStyle, ...props }: DateInputProps) {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container isActive={isActive} style={containerStyle}>
      <Caption
        style={{
          paddingBottom: 4,
          fontSize: 12,
          color: isActive ? theme.colors.primaryLight : theme.colors.greyDarkest
        }}
      >
        {mode === "date" ? "Data:" : "Horário:"}
      </Caption>
      <MaskInput
        style={{ fontSize: 16, ...(typeof props.style === "object" ? props.style : {}) }}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={value}
        mask={mode === "time" ? [/\d/, /\d/, ":", /\d/, /\d/] : Masks.DATE_DDMMYYYY}
        keyboardType="decimal-pad"
      />
    </Container>
  )
}
