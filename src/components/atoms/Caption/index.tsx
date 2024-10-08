import { TextProps } from "react-native"
import { StyledText } from "./styles"

interface CaptionProps extends TextProps {
  children?: React.ReactNode
}

export default function Caption({ children, ...props }: CaptionProps) {
  return <StyledText {...props}>{children}</StyledText>
}
