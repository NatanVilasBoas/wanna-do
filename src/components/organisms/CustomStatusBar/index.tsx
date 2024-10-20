import * as React from "react"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { StatusBar } from "expo-status-bar"
import theme from "../../../styles/theme"

export default function CustomStatusBar() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ height: insets.top, backgroundColor: theme.colors.secondaryMain }}>
      <StatusBar translucent animated backgroundColor={theme.colors.secondaryMain} />
    </View>
  )
}
