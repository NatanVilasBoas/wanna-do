import AddTask from "../pages/AddTask"
import Home from "../pages/Home"
import { Stack } from "./stackConfig"

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />

      <Stack.Screen name="AddTask" component={AddTask} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
