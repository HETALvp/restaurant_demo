import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{}}>
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerTitle:"Search Screen"}}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'Details Screen'}} />
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
