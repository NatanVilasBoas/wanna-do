import { HelperText, HelperTextProps } from "react-native-paper"

type Props = HelperTextProps & {
  showError?: boolean
}

export default function InfoText({ showError, children, ...props }: Props) {
  return (
    <HelperText {...props} visible={showError}>
      {children}
    </HelperText>
  )
}
