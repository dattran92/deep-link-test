import { Button, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function LoginScreen() {
  const doLogin = () =>{
    Linking.openURL('https://test-deep-link.dattran.one/app-login.html?username=dat');
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title='Authenticate for webapp'
        onPress={doLogin}
      />
    </View>
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
