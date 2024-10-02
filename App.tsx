import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./src/routes"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.primaryMain} />
        {RootNavigator()}
      </ThemeProvider>
    </NavigationContainer>
  )
}
