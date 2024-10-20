import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./src/routes"
import { ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
