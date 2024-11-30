import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Activities: 'activities',
      MonthlyStats: 'stats',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking} children={undefined}>
      {/* Aquí añadiremos las pantallas más adelante */}
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
