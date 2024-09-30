import { Text } from "react-native"
import Home from "../pages/Home"
import { Stack } from "./stackConfig"
import Header from "../components/organisms/Header"

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />
        }}
      />
    </Stack.Navigator>
  )
}
