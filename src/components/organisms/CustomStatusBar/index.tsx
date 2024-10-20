import * as React from "react"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { StatusBar } from "expo-status-bar"

import theme from "../../../styles/theme"

export default function CustomStatusBar({ backgroundColor }: { backgroundColor?: string }) {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ height: insets.top, backgroundColor: backgroundColor ?? theme.colors.secondaryMain }}>
      <StatusBar translucent animated backgroundColor={backgroundColor ?? theme.colors.secondaryMain} />
    </View>
  )
}
