import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Code press</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
