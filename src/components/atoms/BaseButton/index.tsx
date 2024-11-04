import { TouchableOpacityProps } from "react-native"

import theme from "../../../styles/theme"
import Caption from "../Caption"
import { Button } from "./styles"

type BaseButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
}

export default function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <Button {...props}>
      <Caption style={{ color: theme.colors.greyLightest }}>{children}</Caption>
    </Button>
  )
}
