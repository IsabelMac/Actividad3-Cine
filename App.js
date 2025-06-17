{/*import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Banner from './assets/toystory_img.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={Banner} style={{ height: 200, width: '100%' }} />
      <View style={styles.container}>
        <Text>Isabel de JL</Text>
        <Text>Ivanna y Sarita</Text>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/}


// App.js
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
