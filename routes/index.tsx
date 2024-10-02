import Home from "../pages/Home"
import { Stack } from "./stackConfig"
import Header from "../components/organisms/Header"

function renderHeader() {
  return <Header />
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => renderHeader()
        }}
      />
    </Stack.Navigator>
  )
}
