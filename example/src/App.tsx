import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { screenshotsStatusUpdate } from 'react-native-disable-enable-screenshots';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();
  const [isScreenshotDisable, setScreenShotDisable] = React.useState(false);
  const [loading] = React.useState(false);

  const toggleScreeshot = async () => {
    try {
      const res = await screenshotsStatusUpdate(!isScreenshotDisable);
      console.log(res);
      setResult(res);
      setScreenShotDisable(!isScreenshotDisable);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.container}>
        <Image source={require('./assets/img/logo.png')} style={styles.logo} />

        <TouchableOpacity
          style={
            isScreenshotDisable ? styles.activateButton : styles.activatedButton
          }
          onPress={toggleScreeshot}
        >
          <Text style={styles.buttonText}>
            {isScreenshotDisable ? 'Activate' : 'Activated'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.resultText}> {result}</Text>

        {loading && <ActivityIndicator size="large" />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowcontainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  activateButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  activatedButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
