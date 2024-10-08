import { TouchableOpacityProps } from "react-native"
import Caption from "../Caption"
import { Button } from "./styles"

interface BaseButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export default function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <Button {...props}>
      <Caption>{children}</Caption>
    </Button>
  )
}
