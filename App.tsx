import { GestureHandlerRootView } from "react-native-gesture-handler"
import Toast from "react-native-toast-message"

import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "styled-components"

import RootNavigator from "./src/routes"
import theme from "./src/styles/theme"
import { toastConfig } from "./src/styles/toastConfig"

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
