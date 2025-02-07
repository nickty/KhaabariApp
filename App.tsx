"use client"

import { useState } from "react"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { WebView } from "react-native-webview"
import { LoadingIndicator } from "./components/LoadingIndicator"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <WebView
        source={{ uri: "https://khaabari.com" }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsBackForwardNavigationGestures={true}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && <LoadingIndicator />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  webview: {
    flex: 1,
  },
})

export default App

