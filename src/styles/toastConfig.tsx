import { BaseToast, ErrorToast, InfoToast, ToastProps } from "react-native-toast-message"

import AntDesign from "@expo/vector-icons/AntDesign"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import theme from "./theme"

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        paddingLeft: 16,
        backgroundColor: theme.colors.feedbackSuccess,
        alignItems: "center",
        borderRadius: 50
      }}
      renderLeadingIcon={() => <AntDesign name="checkcircleo" size={24} color="black" />}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 14,
        fontWeight: "400",
        color: theme.colors.greyDarkest
      }}
      text2Style={{
        fontSize: 12,
        color: theme.colors.greyDarkest
      }}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftWidth: 0,
        paddingLeft: 16,
        backgroundColor: theme.colors.feedbackError,
        alignItems: "center",
        borderRadius: 50
      }}
      renderLeadingIcon={() => <AntDesign name="closecircleo" size={24} color="white" />}
      text1Style={{
        fontSize: 14,
        fontWeight: "400",
        color: theme.colors.greyLightest
      }}
      text2Style={{
        fontSize: 12,
        color: theme.colors.greyLightest
      }}
    />
  ),
  info: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{
        borderLeftWidth: 0,
        paddingLeft: 16,
        backgroundColor: theme.colors.secondaryLight,
        alignItems: "center",
        borderRadius: 50
      }}
      renderLeadingIcon={() => <MaterialIcons name="error-outline" size={24} color="black" />}
      text1Style={{
        fontSize: 14,
        fontWeight: "400",
        color: theme.colors.greyDarkest
      }}
      text2Style={{
        fontSize: 12,
        color: theme.colors.greyDarkest
      }}
    />
  )
}
