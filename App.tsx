import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import Activities from './src/screens/Activities';
import MonthlyStats from './src/screens/MonthlyStats';
import { getAccessToken } from './src/api/auth'; // Corregido nombre del import

const Stack = createStackNavigator();

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Login: 'login',
      Activities: 'activities',
      MonthlyStats: 'stats',
    },
  },
};

const App = () => {
  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      const data = Linking.parse(event.url);

      // Asegúrate de que `code` sea un string
      const code = Array.isArray(data.queryParams?.code)
        ? data.queryParams?.code[0] // Toma el primer valor si es un array
        : data.queryParams?.code; // Usa directamente si es un string

      if (code) {
        try {
          const tokenData = await getAccessToken(code);
          console.log('Access Token:', tokenData);
        } catch (error) {
          console.error('Error handling deep link:', error);
        }
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="MonthlyStats" component={MonthlyStats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
