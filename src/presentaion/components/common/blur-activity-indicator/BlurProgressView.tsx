import React from "react"
import { View, ActivityIndicator, Text } from "react-native"
//import { BlurView } from "@react-native-community/blur"
import { BlurView } from "expo-blur"

import { styles } from "./styles"
import { Colors } from "../../../../shared/styles"
import tw from "twrnc"

export interface InputProps {
  loadingDisabled?: boolean
}
const BlurProgressView = (props: InputProps) => {
  return (
    // <SafeAreaView style={tw`flex-1 justify-center items-center`}>
    <BlurView
      style={tw`flex-1 justify-center items-center`}
      // blurType="light"
      // blurAmount={10}
      intensity={10}
      // reducedTransparencyFallbackColor="white"
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.AZURE} />
      </View>
    </BlurView>
  )
}
export default BlurProgressView
