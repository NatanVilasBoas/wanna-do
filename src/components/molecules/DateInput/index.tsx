import { useState } from "react"
import { TextInputProps, View, ViewProps } from "react-native"
import { Masks } from "react-native-mask-input"

import theme from "../../../styles/theme"
import Description from "../../atoms/Description"
import InfoText from "../../atoms/InfoText"
import MaskInput from "../../atoms/MaskInput"

type Props = TextInputProps & {
  value: string
  mode: "date" | "time"
  containerStyle?: ViewProps["style"]
  showError?: boolean
  textError?: string
}

export default function DateInput({ value, mode, containerStyle, showError, textError, ...props }: Props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <View style={containerStyle}>
      <Description
        style={{
          paddingBottom: 4,
          color: isActive ? theme.colors.primaryLight : theme.colors.greyDarkest
        }}
      >
        {mode === "date" ? "Data" : "Horário"}
      </Description>
      <MaskInput
        mode={mode}
        value={value}
        isActive={isActive}
        mask={mode === "time" ? [/\d/, /\d/, ":", /\d/, /\d/] : Masks.DATE_DDMMYYYY}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        {...props}
      />
      <InfoText type="error" showError={showError}>
        {textError}
      </InfoText>
    </View>
  )
}
