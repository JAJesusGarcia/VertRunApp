import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import Activities from 'screens/Activities';
import MonthlyStats from 'screens/MonthlyStats';
import { createStackNavigator } from '@react-navigation/stack';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Activities: 'activities',
      MonthlyStats: 'stats',
    },
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="MonthlyStats" component={MonthlyStats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
