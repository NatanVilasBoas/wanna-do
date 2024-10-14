import { StyledText } from "./styles"
import { StyledTextProps } from "../../../shared/interfaces/StyledTextProps"

export default function Caption({ children, ...props }: StyledTextProps) {
  return <StyledText {...props}>{children}</StyledText>
}
