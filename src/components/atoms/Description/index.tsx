import { StyledTextProps } from "../../../shared/interfaces/StyledTextProps"
import { StyledText } from "./styles"

export default function Description({ children, ...props }: StyledTextProps) {
  return <StyledText {...props}>{children}</StyledText>
}
