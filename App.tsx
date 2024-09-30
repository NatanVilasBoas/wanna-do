import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./routes"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      {RootNavigator()}
    </NavigationContainer>
  )
}
