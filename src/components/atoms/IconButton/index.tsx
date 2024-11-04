import { TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps

export default function IconButton({ children, ...props }: Props) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  )
}
