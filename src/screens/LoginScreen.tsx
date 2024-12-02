import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { STRAVA_CLIENT_ID, STRAVA_REDIRECT_URI } from '@env';

const LoginScreen = () => {
  const handleLogin = () => {
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=141474&response_type=code&redirect_uri=vertrunapp://redirect&approval_prompt=auto&scope=read,activity:read_all`;
    Linking.openURL(authUrl);
  };

  return (
    <View style={styles.constainer}>
      <Button title="Iniciar Sesion con Strava" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
