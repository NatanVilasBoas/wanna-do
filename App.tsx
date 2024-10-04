import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./src/routes"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primaryMain} />
          {RootNavigator()}
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
