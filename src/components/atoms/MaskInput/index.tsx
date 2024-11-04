import { MaskInputProps } from "react-native-mask-input"

import { StyledMaskInput } from "./styles"

type Props = MaskInputProps & {
  value: string
  mode: "date" | "time"
  isActive: boolean
}

export default function MaskInput({ value, mode, isActive, ...props }: Props) {
  return (
    <StyledMaskInput
      isActive={isActive}
      style={{ fontSize: 16, ...(typeof props.style === "object" ? props.style : {}) }}
      value={value}
      {...props}
    />
  )
}
