import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./routes"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#626F47" />
      {RootNavigator()}
    </NavigationContainer>
  )
}
