"use client"

import { useState, useRef } from "react"
import { SafeAreaView, StyleSheet, StatusBar, Alert, Text } from "react-native"
import { WebView } from "react-native-webview"
import { LoadingIndicator } from "./components/LoadingIndicator"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const webViewRef = useRef(null)

  const handleLoadError = () => {
    setIsLoading(false)
    Alert.alert("Error", "Failed to load the website. Please check your internet connection and try again.", [
      { text: "Retry", onPress: () => webViewRef.current?.reload() },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <WebView
        ref={webViewRef}
        source={{ uri: "https://khaabari.com" }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsBackForwardNavigationGestures={true}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={handleLoadError}
        renderError={(errorName) => (
          <SafeAreaView style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Error loading page: {errorName}. Please check your internet connection and try again.
            </Text>
          </SafeAreaView>
        )}
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
  },
})

export default App

