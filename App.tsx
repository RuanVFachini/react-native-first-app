import { View,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/home/HomePage';
import Header from './src/components/header/Header';
import Footer from './src/components/footers/Footer';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
    <View style={styles.container}>
      <StatusBar style='auto' />  
      <Header name={'tio do café'}></Header>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          
          <Stack.Screen name="Home" component={HomePage} />
          
        </Stack.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%'
  }
})
