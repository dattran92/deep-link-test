import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const prefix = Linking.createURL('/')

const Stack = createStackNavigator()

export default function App() {
  const [data, setData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        Login: 'login'
      }
    }
  }

  const handleDeepLink = (e) => {
    const _data = Linking.parse(e.url);
    setData(_data)
  }

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink)

    return () => {
      Linking.removeEventListener('url')
    }
  }, [])

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

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
