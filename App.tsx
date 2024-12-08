import { GestureHandlerRootView } from "react-native-gesture-handler"
import Toast from "react-native-toast-message"

import { NavigationContainer } from "@react-navigation/native"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { ThemeProvider } from "styled-components"

import RootNavigator from "./src/routes"
import theme from "./src/styles/theme"
import { toastConfig } from "./src/styles/toastConfig"

dayjs.extend(customParseFormat)

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <RootNavigator />
          <Toast config={toastConfig} />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
